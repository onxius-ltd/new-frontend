import type { Metadata } from "next";
// import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar"; // 👈 import your component
import Preloader from "@/components/Preloader"; // 👈 import your component
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Onxius | Web Development, Software Development & IT Solutions", // Replace with your actual business name
    "url": "https://onxius.com/", // Your website URL
    "telephone": "+44 7723 819735", // Your phone number in international format
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15 Shenley Road",
      "addressLocality": "Hounslow",
      "addressRegion": "United Kingdom",
      "postalCode": "TW5 0AD",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.47815187180674, // Your latitude
      "longitude": -0.38744932353192524 // Your longitude
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00"
    }],
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/groups/25806318469010091/",
      // "https://www.instagram.com/yourprofile"
      //  "https://www.linkedin.com/yourprofile"
    ]
  };

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WWF9DCJ6" />
      <head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome 6 — single source, loaded non-render-blocking.
      NOTE: the old `onLoad="this.media='all'"` trick is a JSX string,
      not a function — React drops it silently, so that link was
      actually render-blocking the whole time, on top of a SECOND
      duplicate Font Awesome v5 request below it. Using a real
      preload + plain inline <script> swap instead, which genuinely
      defers the CSS off the critical path. */}
        <link
          rel="preload"
          as="style"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          id="fa-preload"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          media="print"
          id="fa-stylesheet"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          />
        </noscript>
        <script
          // Plain inline JS (not a React event handler), so it's safe in a
          // server component and actually executes in the browser.
          dangerouslySetInnerHTML={{
            __html: `
        (function () {
          var s = document.getElementById('fa-stylesheet');
          if (s) { s.media = 'all'; }
        })();
      `,
          }}
        />

        {/* Libraries CSS */}
        <link href="/assets/lib/animate/animate.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
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
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="lazyOnload" />

            {/* Animation + utilities */}
            <Script src="/assets/lib/wow/wow.min.js" strategy="lazyOnload" />
            <Script src="/assets/lib/easing/easing.min.js" strategy="lazyOnload" />
            <Script src="/assets/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
            <Script src="/assets/lib/counterup/counterup.min.js" strategy="lazyOnload" />

            {/* Lightbox */}
            <Script src="/assets/lib/lightbox/js/lightbox.min.js" strategy="lazyOnload" />

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
