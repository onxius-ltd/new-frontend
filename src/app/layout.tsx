import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar"; // 👈 import your component
import Preloader from "@/components/Preloader"; // 👈 import your component
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import BackToTop from "@/components/BackToTop";
import Script from "next/script";
// import TrustPilotReviews from "@/components/TrustPilotReviews";
// import HomeHeader from "@/components/HomeHeader";
// import Header from "@/components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./globals.css";


import "bootstrap/dist/css/bootstrap.min.css";



// const plusJakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Onxius | Built for What’s Next",
  description:
    "Onxius is a modern IT solutions company delivering web development, software engineering, cloud services, and digital transformation for businesses worldwide. We create innovative, scalable, and secure technology solutions to help companies grow.",
  keywords: [
    "Onxius",
    "IT solutions",
    "web development",
    "software development",
    "cloud services",
    "digital transformation",
    "technology company",
    "enterprise IT"
  ],
  openGraph: {
    title: "Onxius | Innovative IT Solutions & Web Development",
    description:
      "Onxius provides modern IT solutions including web development, cloud services, and digital transformation to help businesses scale with technology.",
    // url: "https://yourdomain.com",
    siteName: "Onxius",
    // images: [
    //   {
    //     url: "https://yourdomain.com/path-to-logo-or-banner.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Onxius - Innovative IT Solutions",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onxius | Innovative IT Solutions & Web Development",
    description:
      "Onxius delivers secure, scalable IT solutions including web development, software engineering, and cloud services for businesses worldwide.",
    // images: ["https://yourdomain.com/path-to-logo-or-banner.jpg"],
  },
};

// Add viewport for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Add structured data for better SEO
// Could add JSON-LD for organization schema

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Icon Fonts */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* Libraries CSS */}
        <link href="/assets/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* <link href="/assets/lib/owlcarousel/assets/owl.theme.default.min.css" rel="stylesheet" /> */}
        {/* <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" /> */}
        {/* <link href="/assets/lib/lightbox/css/lightbox.min.css" rel="stylesheet" /> */}

        {/*  Customized Bootstrap Stylesheet */}
        {/* <link href="/assets/css/bootstrap.min.css" rel="stylesheet" /> */}

        {/*  Template Stylesheet  */}
        <link href="/assets/css/style.css" rel="stylesheet" />
      </head>
      <body
      >
        {
          <div>
            <Preloader />
            <Navbar />
            {children}
            {/* <TrustPilotReviews /> */}
            <Footer />
            <Copyright />
            {/* <BackToTop /> */}
            {/* <!-- JavaScript Libraries --> */}
            {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="/assets/lib/wow/wow.min.js"></script>
            <script src="/assets/lib/easing/easing.min.js"></script>
            <script src="/assets/lib/waypoints/waypoints.min.js"></script>
            <script src="/assets/lib/counterup/counterup.min.js"></script>
            <script src="/assets/lib/owlcarousel/owl.carousel.min.js"></script>

            <script src="/assets/lib/lightbox/js/lightbox.min.js"></script> */}

            {/* <!-- Template Javascript --> */}
            {/* <script src="/assets/js/main.js"></script> */}


            {/* jQuery & Bootstrap (must load first) */}
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

            {/* Animation + utilities */}
            <Script src="/assets/lib/wow/wow.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/easing/easing.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/counterup/counterup.min.js" strategy="afterInteractive" />

            {/* Owl Carousel */}
            {/* <Script src="/assets/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" /> */}

            {/* Lightbox */}
            <Script src="/assets/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />

            {/* Your custom template script */}
            <Script src="/assets/js/main.js" strategy="afterInteractive" />

            {/* bootstrap js */}
            <Script
              src="bootstrap/dist/js/bootstrap.bundle.min.js"
              strategy="afterInteractive"
            />

            {/* <!-- Google tag (gtag.js) --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4JZ0YM6EKD"></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4JZ0YM6EKD');`}
            </script>
          </div>
        }
      </body>
    </html>
  );
}
