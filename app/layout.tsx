import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SOCIAL_LINKS } from "@/lib/data";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

const ogImageUrl = `${SITE_URL}/images/og-preview.jpg`;
const ogPngUrl = `${SITE_URL}/images/og-preview.png`;

export const viewport: Viewport = {
  themeColor: "#6D28D9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | BizPsy GTM Studio",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "GTM Studio",
    "Go-To-Market Strategy",
    "Startup GTM",
    "SaaS GTM",
    "Customer Acquisition",
    "User Acquisition",
    "Product Positioning",
    "Startup Distribution",
    "Founder-Led Growth",
    "Repeatable Growth Systems",
    "B2B SaaS Growth",
    "GTM Audit",
    "BizPsy",
  ],
  authors: [{ name: "BizPsy GTM Studio", url: SITE_URL }],
  creator: "BizPsy",
  publisher: "BizPsy",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/bizpsy-icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/bizpsy-icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/bizpsy-icon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/images/bizpsy-icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/images/bizpsy-icon-32.png"],
    apple: [
      { url: "/images/bizpsy-icon-180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "BizPsy GTM Studio",
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/jpeg",
      },
      {
        url: ogPngUrl,
        secureUrl: ogPngUrl,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageUrl],
    creator: "@bizpsy",
    site: "@bizpsy",
  },
  category: "Business & Technology",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.bizpsy.in/#organization",
      name: "BizPsy",
      alternateName: ["BizPsy GTM Studio", "BizPsy Go-To-Market Studio"],
      url: "https://www.bizpsy.in",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.bizpsy.in/#logo",
        url: "https://www.bizpsy.in/images/bizpsy-logo-dark.png",
        caption: "BizPsy GTM Studio Logo",
      },
      image: "https://www.bizpsy.in/images/og-preview.jpg",
      description:
        "BizPsy is a GTM studio helping startups and SaaS founders build go-to-market strategies, acquire their first users, improve positioning, and create repeatable growth systems.",
      email: "info@bizpsy.in",
      telephone: "+919080390824",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "Country",
          name: "United Kingdom",
        },
        {
          "@type": "Country",
          name: "Worldwide",
        },
      ],
      knowsAbout: [
        "Go-To-Market Strategy",
        "GTM Studio",
        "Startup GTM",
        "SaaS GTM",
        "Customer Acquisition",
        "User Acquisition",
        "Product Positioning",
        "Startup Distribution",
        "Founder-Led Growth",
        "Repeatable Growth Systems",
        "Buyer Research",
        "B2B SaaS Growth",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+919080390824",
        contactType: "customer service",
        email: "info@bizpsy.in",
        availableLanguage: ["English", "Tamil"],
      },
      sameAs: SOCIAL_LINKS.map((link) => link.href),
    },
    {
      "@type": "WebSite",
      "@id": "https://www.bizpsy.in/#website",
      url: "https://www.bizpsy.in",
      name: "BizPsy",
      alternateName: "BizPsy Go-To-Market Studio",
      description:
        "BizPsy is a GTM studio helping startups and SaaS founders build go-to-market strategies, acquire their first users, improve positioning, and create repeatable growth systems.",
      publisher: {
        "@id": "https://www.bizpsy.in/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/bizpsy-icon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/images/bizpsy-icon-48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/images/bizpsy-icon-64.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/bizpsy-icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/bizpsy-icon-180.png" />
        <link rel="shortcut icon" href="/images/bizpsy-icon-32.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        {/* Fonts preconnections */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..700;1,6..72,400..700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink antialiased selection:bg-[#DDD6FE] selection:text-[#6D28D9]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
