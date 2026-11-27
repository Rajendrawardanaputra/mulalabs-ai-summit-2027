"use client";

import * as React from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Always default to LIGHT mode as requested ("warna putih gitu bgnya")
  const [theme, setThemeState] = React.useState<Theme>("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Explicitly enforce light theme on initial visit or reset from legacy dark state
    const saved = localStorage.getItem("mulalabs_theme") as Theme | null;
    if (saved === "dark") {
      // User explicitly requested bright white theme; clear legacy dark setting
      localStorage.setItem("mulalabs_theme", "light");
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    } else if (saved === "light") {
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("mulalabs_theme", "light");
      setThemeState("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("mulalabs_theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
