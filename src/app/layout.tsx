import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EVENT_DETAILS } from "@/constants/theme";
import { LanguageProvider } from "@/contexts/language-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${EVENT_DETAILS.name} | ${EVENT_DETAILS.tagline}`,
  description: `${EVENT_DETAILS.name} — ${EVENT_DETAILS.theme}. Konferensi kecerdasan buatan internasional terdepan di Asia Tenggara, 14-16 Oktober 2027 di JIExpo Kemayoran, Jakarta.`,
  keywords: [
    "MULALABS AI SUMMIT 2027",
    "AI Summit Indonesia",
    "Artificial Intelligence Conference",
    "Human Artificial Intelligence",
    "Jakarta AI Event 2027",
    "Quantum Machine Learning",
    "Neuromorphic Silicon",
    "Next.js AI",
  ],
  authors: [{ name: "Mulalabs AI Organization" }],
  creator: "Mulalabs",
  publisher: "Mulalabs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mulalabs.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${EVENT_DETAILS.name} | ${EVENT_DETAILS.tagline}`,
    description: `Konferensi kecerdasan buatan internasional terdepan di Asia Tenggara. Eksplorasi sinergi ${EVENT_DETAILS.theme}.`,
    url: "https://mulalabs.ai",
    siteName: EVENT_DETAILS.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_DETAILS.name} | ${EVENT_DETAILS.tagline}`,
    description: "Building Tomorrow With Intelligence. International AI & Technology Conference 2027.",
    creator: "@mulalabs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: EVENT_DETAILS.name,
    description: `${EVENT_DETAILS.name} — ${EVENT_DETAILS.tagline}. ${EVENT_DETAILS.theme}.`,
    startDate: "2027-10-14T09:00:00+07:00",
    endDate: "2027-10-16T18:00:00+07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Jakarta International Expo (JIExpo Kemayoran)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Grand Ballroom & Tech Halls A-C, Arena PRJ Kemayoran",
        addressLocality: "Jakarta Utara",
        addressRegion: "DKI Jakarta",
        postalCode: "10620",
        addressCountry: "ID",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Mulalabs AI",
      url: "https://mulalabs.ai",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Delegate Pass",
        price: "299",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://mulalabs.ai#register",
      },
      {
        "@type": "Offer",
        name: "VIP All-Access Pass",
        price: "699",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://mulalabs.ai#register",
      },
    ],
  };

  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-[#FFFFFF] min-h-screen`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
