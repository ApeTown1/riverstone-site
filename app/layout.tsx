import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
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
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/riverstone-logo.png"
        />
        <link rel="canonical" href="https://www.riverstone.one" />
        <Head>
          {/* Google tag (gtag.js) */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-KMBWL96DR9"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KMBWL96DR9');
              `,
            }}
          />
        </Head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
        style={{ minHeight: '100vh' }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}