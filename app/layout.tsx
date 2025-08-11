import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3 Growth, Powered by Insight",
  description: "Precision Advisory for Web3 Leaders",
  verification: {
    google: "4RG0_WjIazwIP-7gNEQiDIlnJ2Pl5RDkm8le4dwQ_Is",
  },
  openGraph: {
    title: "Web3 Growth, Powered by Insight",
    description: "Precision Advisory for Web3 Leaders",
    url: "https://www.riverstone.one",
    images: ["https://riverstone.one/riverstone-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Growth, Powered by Insight",
    description: "Precision Advisory for Web3 Leaders",
    images: ["https://riverstone.one/riverstone-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
        style={{ minHeight: '100vh' }}
        suppressHydrationWarning
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KK97HC5HHN`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KK97HC5HHN');
          `}
        </Script>
      </body>
    </html>
  );
}