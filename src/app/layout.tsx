import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar"; // 👈 import your component
import Preloader from "@/components/Preloader"; // 👈 import your component
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Script from "next/script";
import "./globals.css";


import "bootstrap/dist/css/bootstrap.min.css";



// const plusJakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta-sans",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Onxius | Built for What’s Next",
//   description:
//     "Onxius is a modern IT solutions company delivering web development, software engineering, cloud services, and digital transformation for businesses worldwide. We create innovative, scalable, and secure technology solutions to help companies grow.",
//   keywords: [
//     "Onxius",
//     "IT solutions",
//     "web development",
//     "software development",
//     "cloud services",
//     "digital transformation",
//     "technology company",
//     "enterprise IT"
//   ],
//   openGraph: {
//     title: "Onxius | Innovative IT Solutions & Web Development",
//     description:
//       "Onxius provides modern IT solutions including web development, cloud services, and digital transformation to help businesses scale with technology.",
//     // url: "https://yourdomain.com",
//     siteName: "Onxius",
//     // images: [
//     //   {
//     //     url: "https://yourdomain.com/path-to-logo-or-banner.jpg",
//     //     width: 1200,
//     //     height: 630,
//     //     alt: "Onxius - Innovative IT Solutions",
//     //   },
//     // ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Onxius | Innovative IT Solutions & Web Development",
//     description:
//       "Onxius delivers secure, scalable IT solutions including web development, software engineering, and cloud services for businesses worldwide.",
//     // images: ["https://yourdomain.com/path-to-logo-or-banner.jpg"],
//   },
// };

export const metadata: Metadata = {
  // Use a title object to create a dynamic template
  title: {
    default: "Onxius | Built for What’s Next", // Fallback for the home page
    template: "%s | Onxius", // %s will be replaced by the title in individual pages
  },
  description:
    "Onxius is a modern IT solutions company delivering web development, software engineering, cloud services, and digital transformation for businesses worldwide.",
  keywords: [
    "Onxius", "IT solutions", "web development", "software development",
    "cloud services", "digital transformation", "technology company", "enterprise IT"
  ],
  openGraph: {
    title: {
      default: "Onxius | Innovative IT Solutions & Web Development",
      template: "%s | Onxius",
    },
    description: "Onxius provides modern IT solutions to help businesses scale with technology.",
    siteName: "Onxius",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Onxius | Innovative IT Solutions & Web Development",
      template: "%s | Onxius",
    },
    description: "Onxius delivers secure, scalable IT solutions including web development and cloud services.",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Icon Fonts */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />

        {/* Libraries CSS */}
        <link href="/assets/lib/animate/animate.min.css" rel="stylesheet" />

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


            {/* jQuery & Bootstrap (must load first) */}
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />

            {/* Animation + utilities */}
            <Script src="/assets/lib/wow/wow.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/easing/easing.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
            <Script src="/assets/lib/counterup/counterup.min.js" strategy="afterInteractive" />

            {/* Lightbox */}
            <Script src="/assets/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />

            {/* Your custom template script */}
            <Script src="/assets/js/main.js" strategy="afterInteractive" />

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
