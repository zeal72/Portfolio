import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  weight: "variable",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const baseUrl = "https://zeal72.github.io/portfolio";

export const metadata: Metadata = {
  title: "Abraham Zeal — Frontend Developer",
  description:
    "Abraham Zeal — Frontend Developer based in Nigeria. Building fast, clean web interfaces for the world.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Freelance Frontend Developer",
    "Frontend Developer Nigeria",
    "Hire Frontend Developer",
  ],
  openGraph: {
    title: "Abraham Zeal — Frontend Developer",
    description:
      "Frontend Developer based in Nigeria. Building fast, clean web interfaces for the world.",
    url: baseUrl,
    siteName: "Abraham Zeal",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Abraham Zeal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Zeal — Frontend Developer",
    description:
      "Frontend Developer based in Nigeria. Building fast, clean web interfaces for the world.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@zeal_abrah98107",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Abraham Zeal",
      url: baseUrl,
      sameAs: [
        "https://github.com/zeal72",
        "https://linkedin.com/in/abraham-zeal-9bab2b2b7",
        "https://twitter.com/zeal_abrah98107",
      ],
      jobTitle: "Frontend Developer",
      description:
        "Frontend Developer with 2–3 years building and shipping web products across diverse domains.",
      image: `${baseUrl}/og-image.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Abraham Zeal — Frontend Developer",
      description:
        "Frontend Developer based in Nigeria. Building fast, clean web interfaces for the world.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${sora.variable}`}>
      <head>
        <Script
          src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
