import type { Metadata } from "next";

// export const metadata: Metadata = {
//       // Renders as "Our Portfolio | Onxius" via your root template
//       title: "Our Portfolio",
//       description: "Explore our latest projects and success stories. See how Onxius helps businesses scale through custom web development, innovative software engineering, and cloud solutions.",

//       openGraph: {
//             title: "Portfolio & Case Studies | Onxius Studio",
//             description: "Take a look at the digital transformations we've led for clients worldwide. Quality engineering meets modern design.",
//             type: "website",
//       },

//       twitter: {
//             card: "summary_large_image",
//             title: "Onxius Project Showcase",
//             description: "Discover our work in web development, mobile apps, and enterprise software.",
//       },
// };

export default function PortfolioLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <section className="portfolio-layout-wrapper">
                  {children}
            </section>
      );
}