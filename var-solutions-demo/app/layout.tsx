import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { images, site } from "@/lib/content";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_GB",
    siteName: "VAR Solutions Ltd",
    images: [{ url: images.after.src, alt: images.after.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [images.after.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      data-scroll-behavior="smooth"
      className={`${barlow.variable} ${inter.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
