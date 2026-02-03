"use client";
import PorfolioCard, { ItemProps } from "./PorfolioCard";
import Globe from "@/icons/Globe";
import AppStore from "@/icons/AppStore";
import Car from "@/icons/Car";
import Consultancy from "@/icons/Consultancy";
import Microchrip from "@/icons/Microchrip";

export const portfolioData: ItemProps[] = [
      {
            id: 1,
            title: "TEI Enterprises App",
            description: "A modern business management app for streamlined operations and client engagement, available on Google Play Store.",
            image: "/assets/img/tei-enterprises.png",
            tags: [
                  {
                        icon: <AppStore />,
                        label: "Mobile App"
                  },
                  {
                        label: "Android & iOS"
                  },
                  {
                        label: "React Native"
                  }
            ],
            link: "https://play.google.com/store/apps/details?id=app.tei.enterprises&hl=en",
            arrtibutes: [
                  { counting: "+35%", label: "User Engagement" },
                  { counting: "10,000+", label: "Active Users" }
            ]
      },
      {
            id: 2,
            title: "Heavenly Meats LLC",
            description: "A premium meat and BBQ business website with mouth-watering visuals and responsive design for enhanced user experience.",
            image: "/assets/img/heavenlymeatsllc.png",
            tags: [
                  {
                        icon: <Globe />,
                        label: "E-commerce"
                  },
                  {
                        label: "Online Store"
                  },
                  {
                        label: "Visual Branding"
                  }
            ],
            link: "https://heavenlymeatsllc.com/",
            arrtibutes: [
                  { counting: "+42%", label: "Online Orders" },
                  { counting: "2.5s", label: "Load Time" }
            ]
      },
      {
            id: 3,
            title: "Auto-Bids",
            description: "A smart vehicle bidding and auction platform designed for seamless user experience, security, and efficient transactions.",
            image: "/assets/img/auto-bids.png",
            tags: [
                  {
                        icon: <Car />,
                        label: "Auction Platform"
                  },
                  {
                        label: "Automotive"
                  },
                  {
                        label: "React & Laravel"
                  }
            ],
            link: "https://auto-bids.com/",
            arrtibutes: [
                  { counting: "+58%", label: "Bidding Activity" },
                  { counting: "5000+", label: "vehicle Registered" }
            ]
      },
      {
            id: 4,
            title: "LA121 Consultants",
            description: "A sleek, professional consultancy website with modern minimal UI showcasing services and expertise for business growth.",
            image: "/assets/img/la121consultants.png",
            tags: [
                  {
                        icon: <Consultancy />,
                        label: "Consultancy"
                  },
                  {
                        label: "Lead Generation"
                  },
                  {
                        label: "Business Website"
                  }
            ],
            link: "https://la121consultants.netlify.app/",
            arrtibutes: [
                  { counting: "+58%", label: "Client Inquiries" },
                  { counting: "+78%", label: "Uptime" }
            ]
      },
      {
            id: 5,
            title: "NFT Neighbors",
            description: "An engaging NFT community platform featuring digital assets, Web3 integration, and immersive blockchain experiences.",
            image: "/assets/img/nftneighbors.png",
            tags: [
                  {
                        icon: <Microchrip />,
                        label: "Blockchain"
                  },
                  {
                        label: "NFT Platform"
                  },
                  {
                        label: "Web3"
                  }
            ],
            link: "https://nftneighbors.com/",
            arrtibutes: [
                  { counting: "500+", label: "NFTs Minted" },
                  { counting: "+65%", label: "Community Growth" }
            ]
      },
];


export default function Portfolio() {
      return (
            <section
                  id="portfolio"
                  className="relative py-2 pb-5 bg-transparent backdrop-blur-md"
            >
                  <div className="container mx-auto px-6">
                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-6xl font-bold mb-3 drop-shadow-sm text-capitalize">
                                    {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 uppercase">
                                          OUR  Work
                                    </span> */}
                                    Our  Work
                              </h2>
                              <p className="text-gray-700 max-w-lg mx-auto text-xl">
                                    {/* Built for What’s Next ✨ */}
                                    Some of our recent projects we&apos;re proud of
                              </p>
                        </div>

                        {/* Portfolio Cards */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {portfolioData?.length > 0 && portfolioData.map((item, index) => (
                                    <PorfolioCard data={item} key={index} />
                              ))}
                        </div>
                  </div>
            </section>
      );
}