"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is the price of Supreme Villagio villas and townhouses?",
    answer: "Pricing starts from ₹2.89 Cr* for 4 BHK Luxury Townhouses (2,200 – 2,400 sq.ft.), ₹3.45 Cr* for 4 BHK Luxury Twin Villas (2,600 – 2,900 sq.ft. with private 3-side open garden), and ₹4.85 Cr* for exclusive 5 BHK Grand Presidential Villas (3,400 – 3,900 sq.ft. with private elevator provision). All prices exclude 7% Maharashtra Stamp Duty, ₹30,000 Registration Fee, and applicable GST."
  },
  {
    question: "What are the MahaRERA registration numbers for Supreme Villagio?",
    answer: "Supreme Villagio is registered with MahaRERA under three distinct project phases: Phase 1 (MahaRERA Reg: P52100046867), Phase 2 (MahaRERA Reg: P52100049506), and Phase 3 (MahaRERA Reg: P52100055048). All details can be verified on the official MahaRERA portal (maharera.mahaonline.gov.in)."
  },
  {
    question: "What is the current construction and possession timeline?",
    answer: "Phase 1 & Phase 2 are 100% completed with full Occupation Certificates (OC) received and handed over to homeowners. The 18,500 sq.ft. Club Villagio is fully operational. Phase 3 hillside villas are under active construction with MahaRERA statutory possession scheduled for December 31, 2028."
  },
  {
    question: "What are the exact carpet areas and plot sizes?",
    answer: "Carpet areas range from ~2,200 sq.ft. for 4 BHK Townhouses (G+2 layout) up to ~3,900 sq.ft. for 5 BHK Presidential Villas. Plot sizes range from 2,500 to 5,000+ sq.ft. with private garden allocations and covered car parking for 2 to 3 vehicles."
  },
  {
    question: "What amenities are included in the 18,500 sq. ft. Club Villagio?",
    answer: "Club Villagio is ready and operational, offering an Olympic-length swimming pool, heated kids' pool, squash court, badminton court, wellness gymnasium, multi-cuisine cafe, banquet hall, spa treatment suites, and landscaped wellness trails designed by Site Concepts International, Singapore."
  },
  {
    question: "Where is Supreme Villagio located and what are the commute times?",
    answer: "Supreme Villagio is situated at Somatane Phata, Pune West (616m elevation). Commute times are 20 mins to Hinjewadi IT Park (18 km), 25 mins to Baner (25 km), 8 mins to Talegaon MIDC, 3 mins to the Mumbai-Pune Expressway Toll Plaza, and 30 mins to Lonavala."
  },
  {
    question: "What is the payment schedule for under-construction Phase 3 units?",
    answer: "Phase 3 offers a milestone-linked construction plan: 10% on booking, 15% on plinth completion, 25% across RCC slab stages, 25% on brickwork/plastering, 20% on internal finishes, and 5% on possession handover."
  },
  {
    question: "Is Supreme Villagio suitable for NRI real estate investment?",
    answer: "Yes, Supreme Villagio is heavily favored by NRI buyers in the UAE, US, UK, and Singapore due to its freehold title ownership, strong Somatane capital appreciation (14% YoY), managed gated community maintenance, and pre-approved home loan status with HDFC, SBI, ICICI, and Axis Bank."
  }
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-cream text-charcoal">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold font-bold mb-4">
            Questions & Answers
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-light">
            Frequently Asked Questions
          </h3>
        </div>

        <Accordion className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-charcoal py-4">
              <AccordionTrigger className="text-left font-heading text-lg md:text-xl hover:text-gold transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal-light leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
