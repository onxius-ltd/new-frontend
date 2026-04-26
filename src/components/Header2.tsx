"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header2() {
      return <div className="h-[40px] sm:h-[50px] lg:h-[120px] bg-white"></div>
      // const pathname = usePathname();
      // const segments = pathname.split("/").filter(Boolean);

      // const title =
      //       segments.length === 0
      //             ? "Home"
      //             : segments[segments.length - 1]
      //                   .replace(/-/g, " ")
      //                   .replace(/\b\w/g, (l) => l.toUpperCase());

      // return (
      //       <>
      //             {/* Header Start */}
      //             <div className="container-fluid bg-breadcrumb" style={{ position: "relative" }}>
      //                   <ul className="breadcrumb-animation">
      //                         {Array.from({ length: 10 }).map((_, i) => (
      //                               <li key={i} />
      //                         ))}
      //                   </ul>

      //                   <div
      //                         className="container"
      //                         style={{
      //                               maxWidth: 900,
      //                               display: "flex",
      //                               flexDirection: "column",
      //                               alignItems: "center",
      //                               justifyContent: "center",
      //                               paddingTop: "0.25rem",
      //                               paddingBottom: "0.25rem",
      //                         }}
      //                   >
      //                         <h3
      //                               className="wow fadeInDown"
      //                               data-wow-delay="0.1s"
      //                               style={{
      //                                     textAlign: "center",
      //                                     fontSize: "1.8rem",
      //                                     fontWeight: 600,
      //                                     marginBottom: "0.1rem",
      //                                     lineHeight: 1.2,
      //                               }}
      //                         >
      //                               {title}
      //                         </h3>

      //                         <ol
      //                               className="breadcrumb justify-content-center mb-0 wow fadeInDown"
      //                               data-wow-delay="0.3s"
      //                               style={{ fontSize: "0.9rem", marginBottom: 0, paddingBottom: 0 }}
      //                         >
      //                               <li className="breadcrumb-item">
      //                                     <Link href="/">Home</Link>
      //                               </li>

      //                               {segments.length > 0 &&
      //                                     segments.map((segment, index) => {
      //                                           const path = "/" + segments.slice(0, index + 1).join("/");
      //                                           const isLast = index === segments.length - 1;
      //                                           const label = segment
      //                                                 .replace(/-/g, " ")
      //                                                 .replace(/\b\w/g, (l) => l.toUpperCase());

      //                                           return (
      //                                                 <li
      //                                                       key={path}
      //                                                       className={`breadcrumb-item ${isLast ? "active text-primary" : ""
      //                                                             }`}
      //                                                 >
      //                                                       {isLast ? (
      //                                                             <span>{label}</span>
      //                                                       ) : (
      //                                                             <Link href={path}>{label}</Link>
      //                                                       )}
      //                                                 </li>
      //                                           );
      //                                     })}
      //                         </ol>
      //                   </div>
      //             </div>
      //             {/* Header End */}
      //       </>
      // );
}
