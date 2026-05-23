import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "../shared/SectionHeading";

const FAQS = [
  {
    q: "How long does a typical kitchen remodel take?",
    a: "A standard kitchen remodel typically takes 4-8 weeks depending on the scope. We'll provide a detailed timeline during your free estimate so you know exactly what to expect.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes! We offer completely free, no-obligation estimates. Owner Richard Takushi personally comes out for every initial estimate to ensure accuracy and clear communication from day one.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. TexTech Construction always maintains up-to-date liability insurances. We're happy to supply you with certificates of insurance at any time upon request.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the Greater Houston area within a 50-mile radius, including The Woodlands, Katy, Sugar Land, Spring, Tomball, Cypress, Humble, Kingwood, Conroe, Magnolia, and more.",
  },
  {
    q: "Will the owner be on-site during my project?",
    a: "Yes. Owner Richard Takushi is on site for every project. He handles your initial estimate, orders all material selections, and manages communication through every phase of your project.",
  },
  {
    q: "Do you offer financing options?",
    a: "We work with homeowners to find the best solution for their budget. Contact us during your free estimate consultation to discuss payment options for your project.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with TexTech Construction."
        />

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline hover:text-accent transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


