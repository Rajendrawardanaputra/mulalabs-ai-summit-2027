"use client";

import * as React from "react";

export function HeroVisual() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Handle high DPI display scaling cleanly without performance degradation
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = (canvas.width = container.offsetWidth * dpr);
    let height = (canvas.height = container.offsetHeight * dpr);

    const handleResize = () => {
      if (!canvas || !container) return;
      width = canvas.width = container.offsetWidth * dpr;
      height = canvas.height = container.offsetHeight * dpr;
    };

    window.addEventListener("resize", handleResize);

    // Performance optimization: Pause render loop when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 3D Neural Points Generation
    const numPoints = 85;
    const radius = Math.min(width, height) * 0.35;
    const points: { x: number; y: number; z: number; origX: number; origY: number; origZ: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(numPoints * Math.PI) * theta;
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);
      points.push({ x, y, z, origX: x, origY: y, origZ: z });
    }

    let angleX = 0;
    let angleY = 0;
    let targetAngleX = 0;
    let targetAngleY = 0;

    // Mouse Parallax
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      targetAngleY = (mouseX / rect.width) * 1.2;
      targetAngleX = (-mouseY / rect.height) * 1.2;
    };

    // Mobile Touch Gesture Support
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].clientY - touchStartY;
        targetAngleY = (deltaX / 150) * 1.5;
        targetAngleX = (-deltaY / 150) * 1.5;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Smooth inertia rotation
        angleX += (targetAngleX - angleX) * 0.05 + 0.002;
        angleY += (targetAngleY - angleY) * 0.05 + 0.003;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);

        const projectedPoints: { px: number; py: number; pz: number; alpha: number }[] = [];

        for (let i = 0; i < points.length; i++) {
          const p = points[i];

          const x1 = p.origX * cosY - p.origZ * sinY;
          const z1 = p.origZ * cosY + p.origX * sinY;

          const y2 = p.origY * cosX - z1 * sinX;
          const z2 = z1 * cosX + p.origY * sinX;

          const fov = 400 * dpr;
          const scale = fov / (fov + z2 + 100 * dpr);
          const px = x1 * scale + width / 2;
          const py = y2 * scale + height / 2;
          const alpha = Math.max(0.15, Math.min(1, (z2 + radius) / (radius * 2)));

          projectedPoints.push({ px, py, pz: z2, alpha });
        }

        // Draw Neural Connectors
        ctx.lineWidth = 0.8 * dpr;
        for (let i = 0; i < projectedPoints.length; i++) {
          for (let j = i + 1; j < projectedPoints.length; j++) {
            const p1 = projectedPoints[i];
            const p2 = projectedPoints[j];
            const dx = p1.px - p2.px;
            const dy = p1.py - p2.py;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 75 * dpr) {
              const lineAlpha = (1 - dist / (75 * dpr)) * Math.min(p1.alpha, p2.alpha) * 0.45;
              ctx.strokeStyle = "rgba(0, 212, 255, " + lineAlpha + ")";
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.stroke();
            }
          }
        }

        // Outer Holographic Orbit Rings
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(angleY * 0.5);

        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.25, radius * 0.45, angleX, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 212, 255, 0.18)";
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.1, radius * 0.6, -angleX * 1.2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(8, 123, 255, 0.22)";
        ctx.lineWidth = 1 * dpr;
        ctx.stroke();

        ctx.restore();

        // Draw Nodes
        for (let i = 0; i < projectedPoints.length; i++) {
          const p = projectedPoints[i];
          const pointSize = Math.max(1.5 * dpr, ((p.pz + radius) / (radius * 1.5)) * 3 * dpr);

          ctx.beginPath();
          ctx.arc(p.px, p.py, pointSize, 0, Math.PI * 2);
          ctx.fillStyle = p.pz > 0 ? "rgba(0, 212, 255, 0.95)" : "rgba(8, 123, 255, 0.6)";
          ctx.shadowColor = "#00D4FF";
          ctx.shadowBlur = p.pz > 0 ? 10 * dpr : 3 * dpr;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[460px] lg:h-[540px] flex items-center justify-center touch-pan-y"
      role="img"
      aria-label="Interactive 3D Neural Sphere visualization of Mulalabs AI"
    >
      <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-[#087BFF]/25 via-[#00D4FF]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[#087BFF] to-[#00D4FF] opacity-25 blur-2xl pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
      />

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/70 border border-white/10 backdrop-blur-md text-[10px] font-mono text-[#00D4FF]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-ping" />
        <span>INTERACTIVE NEURAL CORE 3D</span>
      </div>
    </div>
  );
}
