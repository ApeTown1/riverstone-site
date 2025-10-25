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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
        style={{ minHeight: '100vh' }}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
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