import { Signature } from "@/components/layout";
import { openGraphBase, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    ...openGraphBase,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: openGraphBase.images,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e0e8ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} antialiased`}>
      <body className="bg-page text-ink relative flex min-h-dvh flex-col">
        {children}
        <Signature />
      </body>
    </html>
  );
}
