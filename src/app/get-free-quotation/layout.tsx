import type { Metadata } from "next";

// export const metadata: Metadata = {
//       // Renders as "Get a Free Quotation | Onxius" via your root template
//       title: "Get a Free Quotation",
//       description: "Ready to transform your business? Request a free, tailored quotation for web development, software engineering, or cloud solutions from the Onxius team.",

//       openGraph: {
//             title: "Get a Free Quotation | Onxius Studio",
//             description: "Submit your project details and receive a customized technology plan and quotation within 1–2 working days.",
//             type: "website",
//       },

//       twitter: {
//             card: "summary_large_image",
//             title: "Get a Free Quotation | Onxius",
//             description: "Start your digital transformation journey with a custom project quote from Onxius.",
//       },
// };

export default function GetFreeQuotationLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <section className="quotation-layout-wrapper">
                  {children}
            </section>
      );
}