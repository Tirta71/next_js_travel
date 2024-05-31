/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HomePage/Header/HeaderNav";
import Script from "next/script";
import Footer from "@/components/HomePage/Footer/Footer";
import Login from "@/components/Login Register/Login";
import Register from "@/components/Login Register/Register";
import { midtransKey } from "@/utils/formatRupiah";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traveloki",
  description: "Created By Tirta Samara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={midtransKey}
        />
        <meta charSet="utf-8" />
        <title>Traveloki</title>
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          href="/img/Traveloki.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/themify-icons.css" rel="stylesheet" />
        <link href="/font-awesome/css/font-awesome.css" rel="stylesheet" />
        <link href="/css/datepicker.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/fullwidth.css"
          media="screen"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/rs-plugin/css/settings.css"
          media="screen"
        />
        <link rel="stylesheet" href="/css/rev-settings.css" type="text/css" />
        <link href="/css/animated-on3step.css" rel="stylesheet" />
        <link href="/css/owl.carousel.css" rel="stylesheet" />
        <link href="/css/owl.theme.css" rel="stylesheet" />
        <link href="/css/on3step-style.css" rel="stylesheet" />
        <link href="/css/queries-on3step.css" rel="stylesheet" media="all" />
      </head>
      <body className={inter.className}>
        <HeaderNav />
        <Login />
        <Register />
        {children}
        <Footer />
        <Script src="/plugin/pluginson3step.js" strategy="beforeInteractive" />
        <Script src="/plugin/bootstrap.min.js" strategy="beforeInteractive" />
        <Script
          src="/plugin/bootstrap-datepicker.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/plugin/sticky.js" strategy="beforeInteractive" />
        <Script
          src="/rs-plugin/js/jquery.themepunch.tools.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/rs-plugin/js/jquery.themepunch.revolution.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/on3step.js" strategy="lazyOnload" />
        <Script src="/js/plugin-set.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
