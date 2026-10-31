import type { Metadata } from "next";
import LandingPageTemplate from "@/components/layout/LandingPageTemplate";

export const metadata: Metadata = {
  title: "Supreme Villagio Somatane | Official Direct Portal [Ready OC Villas from ₹2.89 Cr* • 0% GST]",
  description: "Official developer portal for Supreme Villagio Somatane, Pune. 4 & 5 BHK luxury gated bungalows & twin villas near PCMC & Mumbai-Pune Expressway. 18,500 sq.ft. Club Villagio. Phase 1 & 2 OC received. Direct developer booking with 0% brokerage: +91 7744009295.",
  keywords: [
    // 1. Core Brand Permutations & Phonetic Misspellings
    "Supreme Villagio", "Supreme Villagio Somatane", "Supreme Villagio Somante", "Supreme Villagio Pune",
    "Supreme Villagio Talegaon", "Supreme Villagio Maval", "Villagio Somatane", "Villagio Somante",
    "Villagio Pune", "Club Villagio", "Club Villagio Somatane", "Supreme Universal Somatane",
    "Supreme Universal Pune", "Supreme Villagio Ecosystem", "Supreme Villagio Somatane Ecosystem",

    // 2. High-Intent Commercial, Price, Resale & Booking Queries
    "Supreme Villagio Price", "Supreme Villagio Cost Sheet", "Supreme Villagio Price List 2026",
    "Supreme Villagio 4 BHK Price", "Supreme Villagio 5 BHK Price", "Supreme Villagio Payment Plan",
    "Supreme Villagio Booking", "Supreme Villagio Resale", "Supreme Villagio Resale Villas",
    "Supreme Villagio Rent", "Supreme Villagio Villas for Rent", "Supreme Villagio 4 BHK",
    "Supreme Villagio 5 BHK", "Supreme Villagio Townhouses", "Supreme Villagio Twin Villas",
    "Supreme Villagio Presidential Villa", "Ready Possession Villas 0 GST",

    // 3. Due Diligence, RERA, Legal & Project Status
    "Supreme Villagio MahaRERA", "Supreme Villagio RERA Number", "Supreme Villagio RERA",
    "Supreme Villagio Possession Date", "Supreme Villagio OC Status", "Supreme Villagio OC Received",
    "Supreme Villagio Construction Status", "Supreme Villagio Bank Approvals SBI HDFC",
    "P52100046867", "P52100049506", "P52100055048",

    // 4. Reputation, Reviews & Head-to-Head Comparisons
    "Supreme Villagio Reviews", "Supreme Villagio Ratings", "Supreme Villagio Testimonials",
    "Supreme Villagio Complaints", "Supreme Villagio vs Lodha Belmondo",
    "Supreme Villagio vs Paranjape Forest Trails", "Supreme Villagio Somatane Reviews",

    // 5. Official Documents, Floor Plans, Brochure & Gallery
    "Supreme Villagio Brochure", "Supreme Villagio Brochure PDF", "Supreme Villagio Download Brochure",
    "Supreme Villagio Floor Plans", "Supreme Villagio 4 BHK Floor Plan", "Supreme Villagio 5 BHK Floor Plan",
    "Supreme Villagio Master Plan", "Supreme Villagio Layout Map", "Supreme Villagio Actual Photos",
    "Supreme Villagio Sample Villa", "Supreme Villagio Address", "Supreme Villagio Location",
    "Supreme Villagio Directions", "Supreme Villagio Contact Number", "Supreme Villagio Sales Office",

    // 6. Pune & PCMC Luxury Real Estate High-Volume Queries
    "Luxury Bungalows in Pune", "Luxury Villas in Pune", "Bungalows in Pune", "Villas in Pune",
    "4 BHK Villa in Pune", "5 BHK Villa in Pune", "Gated Community Villas Pune",
    "Independent Villa in Pune", "Ready Possession Villas Pune", "OC Received Villas Pune",
    "Twin Villas Pune", "Luxury Townhouses Pune", "Row Houses in Pune", "Hillside Villas Pune",
    "Villas Near Hinjewadi IT Park", "Villas Near Baner Balewadi", "Villas Near Wakad",
    "Villas Near Ravet Kiwale", "Luxury Bungalows Near PCMC", "Villas Near Nigdi Pradhikaran",
    "Villas Near Chakan MIDC", "Talegaon Luxury Villas", "Villas Near Talegaon Dabhade",
    "Villas in Somatane", "Villas in Somatane Phata",

    // 7. Mumbai Expressway, Weekend Homes & Atal Setu (MTHL) Corridors
    "Villas Near Mumbai Pune Expressway", "Bungalows Near Mumbai Pune Expressway",
    "Weekend Villas Near Mumbai", "Second Homes Near Mumbai", "Villas Near Atal Setu MTHL",
    "Second Homes Near Lonavala Khandala", "75 Mins Drive Villa From Mumbai", "Mumbai Second Home Villas"
  ],
  alternates: {
    canonical: "https://www.supremesvillagio.com/",
  },
  openGraph: {
    title: "Supreme Villagio Somatane | Official Direct Portal [Ready OC Villas from ₹2.89 Cr* • 0% GST]",
    description: "Official developer portal for Supreme Villagio Somatane, Pune. 4 & 5 BHK luxury gated bungalows & twin villas near PCMC & Mumbai-Pune Expressway. Phase 1 & 2 OC received. 0% Brokerage.",
    url: "https://www.supremesvillagio.com/",
    type: "website",
    images: [
      {
        url: "https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg",
        width: 1200,
        height: 630,
        alt: "Supreme Villagio Luxury Villas Somatane Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supreme Villagio Somatane | Official Direct Portal [Ready OC Villas from ₹2.89 Cr* • 0% GST]",
    description: "Official developer portal for Supreme Villagio Somatane, Pune. 4 & 5 BHK luxury gated bungalows & twin villas near PCMC & Mumbai-Pune Expressway. Direct Developer Booking: +91 7744009295.",
    images: ["https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg"],
  },
};

export default function Home() {
  return <LandingPageTemplate />;
}
