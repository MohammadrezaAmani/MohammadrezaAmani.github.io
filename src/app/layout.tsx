import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - ${DATA.title} | Resume & Portfolio`,
    template: `%s | ${DATA.name} - ${DATA.title}`,
  },
  description: `${DATA.name}, ${DATA.title}. Explore my portfolio, skills, and projects. Contact me for opportunities!`,
  keywords: [
    `${DATA.name}`,
    `${DATA.title}`,
    "portfolio",
    "resume",
    "skills",
    "projects",
  ],
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} - ${DATA.title}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} Portfolio`,
      },
    ],
  },
  twitter: {
    title: `${DATA.name} - ${DATA.title}`,
    card: "summary_large_image",
    images: [`${DATA.url}/og-image.jpg`],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: DATA.name,
              jobTitle: DATA.description,
              url: DATA.url,
              sameAs: [
                DATA.contact.social?.X.url,
                DATA.contact.social?.LinkedIn.url,
                DATA.contact.social?.GitHub.url,
              ],
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
