import type { Metadata } from "next";

// export const metadata: Metadata = {
//       // Renders as "Our Services | Onxius" via your root template
//       title: "Our Services",
//       description: "Comprehensive IT solutions tailored to your business. From custom web development and software engineering to cloud migration and digital transformation, Onxius delivers excellence.",

//       openGraph: {
//             title: "Expert IT & Software Services | Onxius Studio",
//             description: "Discover our full suite of technology services designed to help your business scale, innovate, and lead in the digital age.",
//             type: "website",
//       },

//       twitter: {
//             card: "summary_large_image",
//             title: "Tailored IT Solutions by Onxius",
//             description: "Scale your business with our professional web development, cloud, and software services.",
//       },
// };

export default function ServicesLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <section className="services-layout-wrapper">
                  {children}
            </section>
      );
}