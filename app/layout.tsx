import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import GlobalCrackEffect from "@/components/GlobalCrackEffect";
import TopAlertBar from "@/components/TopAlertBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seattleautoglass.com"),
  title: {
    default: "Seattle Auto Glass LLC | Premium Windshield Repair & Replacement",
    template: "%s | Seattle Auto Glass LLC",
  },
  description:
    "Expert windshield repair and replacement in Seattle. Mobile service, insurance approved, lifetime guarantee. Call (206) 886-1092 for a free quote.",
  keywords: [
    "auto glass",
    "chipped windshield",
    "chip repair",
    "damaged windshield repair",
    "chipped windshield repair",
    "windshield repair",
    "windshield replacement",
    "Seattle auto glass",
    "mobile auto glass",
    "car window replacement",
    "auto glass insurance",
  ],
  authors: [{ name: "Seattle Auto Glass LLC" }],
  creator: "Seattle Auto Glass LLC",
  publisher: "Seattle Auto Glass LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Seattle Auto Glass LLC | Premium Windshield Repair & Replacement",
    description:
      "Expert windshield repair and replacement in Seattle. Mobile service, insurance approved, lifetime guarantee.",
    url: "https://seattleautoglass.com",
    siteName: "Seattle Auto Glass LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Seattle Auto Glass LLC - Premium Auto Glass Services",
      },
    ],
  },
  other: {
    "business:contact_data:phone_number": "206-886-1092",
    "business:contact_data:website": "https://seattleautoglass.com",
    "business:contact_data:locality": "Seattle",
    "business:contact_data:region": "WA",
    "business:contact_data:country_name": "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Auto Glass LLC | Premium Windshield Repair & Replacement",
    description:
      "Expert windshield repair and replacement in Seattle. Mobile service, insurance approved, lifetime guarantee.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased`}
      >
        <TopAlertBar />
        <GlobalCrackEffect />
        {children}
      </body>
    </html>
  );
}
