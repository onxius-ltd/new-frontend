import type { Metadata } from "next";

// export const metadata: Metadata = {
//       // Renders as "Contact Our Team | Onxius" via your root template
//       title: "Contact Our Team",
//       description: "Have a project in mind? Contact Onxius today. Our experts are ready to discuss your web development, cloud, or digital transformation needs and provide a tailored solution.",

//       openGraph: {
//             title: "Get in Touch | Onxius Studio",
//             description: "Connect with Onxius for expert IT consulting and software development. We turn your vision into scalable reality.",
//             type: "website",
//             url: "https://onxius.com/contact", // Update with your actual domain
//       },

//       twitter: {
//             card: "summary_large_image",
//             title: "Contact Onxius | Let's Build What's Next",
//             description: "Reach out to our engineering team for custom software and IT strategies.",
//       },
// };

export default function ContactLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <main className="contact-layout-container">
                  {children}
            </main>
      );
}