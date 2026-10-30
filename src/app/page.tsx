import type { Metadata } from "next";
import LandingPageTemplate from "@/components/layout/LandingPageTemplate";

export const metadata: Metadata = {
  title: "Supreme Villagio Somatane | Official 2026 Portal [Ready OC Villas from ₹2.89 Cr*]",
  description: "Official Project Portal for Supreme Villagio Somatane, Pune. Ultra-luxury 4 & 5 BHK Twin Villas & Townhouses across 16 acres with 18,500 sq.ft. Club Villagio. Phase 1 & 2 OC Received. Download 2026 Price List, Floor Plans & Book Direct Developer Visit.",
  alternates: {
    canonical: "https://www.supremesvillagio.com/",
  },
  openGraph: {
    title: "Supreme Villagio Somatane | Official 2026 Portal [Ready OC Villas from ₹2.89 Cr*]",
    description: "Official Project Portal for Supreme Villagio Somatane, Pune. Ultra-luxury 4 & 5 BHK Twin Villas & Townhouses across 16 acres with 18,500 sq.ft. Club Villagio. Phase 1 & 2 OC Received. Download 2026 Price List, Floor Plans & Book Direct Developer Visit.",
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
    title: "Supreme Villagio Somatane | Official 2026 Portal [Ready OC Villas from ₹2.89 Cr*]",
    description: "Official Project Portal for Supreme Villagio Somatane, Pune. Ultra-luxury 4 & 5 BHK Twin Villas & Townhouses across 16 acres with 18,500 sq.ft. Club Villagio. Phase 1 & 2 OC Received. Direct Developer Booking.",
    images: ["https://d66htbxvzotmo.cloudfront.net/media/1Xi8pH_seologo.jpg"],
  },
};

export default function Home() {
  return <LandingPageTemplate />;
}
