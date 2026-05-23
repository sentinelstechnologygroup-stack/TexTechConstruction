import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageBanner from "../components/shared/PageBanner";
import CTASection from "../components/home/CTASection";

const CATEGORIES = ["All", "Kitchens", "Bathrooms", "Patios", "Roofing", "Windows"];

const GALLERY_ITEMS = [
  { src: "/images/services/kitchen-remodeling.png", alt: "Modern kitchen remodel in Houston", category: "Kitchens" },
  { src: "/images/services/bathroom-remodeling.png", alt: "Luxury bathroom renovation", category: "Bathrooms" },
  { src: "/images/services/patio-covers.png", alt: "Covered patio with outdoor kitchen", category: "Patios" },
  { src: "/images/services/roofing.png", alt: "New roof installation", category: "Roofing" },
  { src: "/images/services/windows.png", alt: "Energy-efficient windows", category: "Windows" },
  { src: "/images/gallery/home-exterior.png", alt: "Renovated home exterior", category: "Patios" },
];

const BANNER = "/images/heros/gallery-hero.png";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      <PageBanner
        title="Photo Gallery"
        breadcrumbs={[{ label: "Gallery" }]}
        backgroundImage={BANNER}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Gallery filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.button
                  key={item.src + item.category}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
                  onClick={() => setLightbox(item)}
                  aria-label={`View ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                      View Project
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}


