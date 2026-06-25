import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-maddy-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-maddy-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maddy.kcstudios.pro"),
  title: `${site.name} | Free Wedding Coordinating`,
  description: site.description,
  openGraph: {
    title: `${site.name} | Free Wedding Coordinating`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 791, height: 1024, alt: site.name }],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body className="maddy-page antialiased">{children}</body>
    </html>
  );
}
