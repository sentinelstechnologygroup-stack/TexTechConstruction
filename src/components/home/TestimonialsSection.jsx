import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Austin R.",
    location: "Houston, Texas",
    text: "This was a great local find. We plan on using them again for our master bathroom. Informed us along the way, helped with suggestions, communicated in a timely way.",
  },
  {
    name: "Max M.",
    location: "Tomball, Texas",
    text: "From the first step to the last, the process was a breeze. The final product was exactly what we were looking for. The entire team was very easy to work with!",
  },
  {
    name: "Chris A.",
    location: "Spring, Texas",
    text: "They were amazing! From the supervisors to the crew and everyone in between. I can't compliment them enough. Highly recommended!",
  },
  {
    name: "Abby C.",
    location: "Houston, Texas",
    text: "TexTech did an amazing job! Richard and his team were exactly what I was looking for. Professional, punctual, and the quality of work exceeded my expectations.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-20 md:py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real Clients. Real Results."
          description="Read what real TexTech Construction clients had to say about their remodeling experience."
          light
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-accent mx-auto mb-6 opacity-50" />
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white/90">
                "{TESTIMONIALS[current].text}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-semibold text-lg">{TESTIMONIALS[current].name}</p>
              <p className="text-sm text-white/50">{TESTIMONIALS[current].location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-white/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


