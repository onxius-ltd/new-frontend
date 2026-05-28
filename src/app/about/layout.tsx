import type { Metadata } from "next";

// export const metadata: Metadata = {
//       // Renders as "About Our Studio | Onxius" via your root template
//       title: "About Our Studio",
//       description: "Discover the story behind Onxius. Learn about our mission to drive digital innovation, our core values, and the expert team dedicated to building your next-gen software solutions.",

//       openGraph: {
//             title: "Who We Are | Onxius Studio",
//             description: "Driven by innovation and built for what’s next. Learn how Onxius combines strategy and engineering to transform businesses.",
//             type: "profile",
//       },

//       twitter: {
//             card: "summary_large_image",
//             title: "About Onxius | Our Mission & Team",
//             description: "Meet the experts at Onxius and explore our journey in modern software development.",
//       },
// };

export default function AboutLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <main className="about-page-layout">
                  {children}
            </main>
      );
}