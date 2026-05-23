import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Kitchen Remodeling",
    description: "Tired of your kitchen? Want a different look? We've got the expertise to transform your space with elegance and style.",
    image: "/images/heros/kitchen-hero.png",
    path: "/services/kitchens",
  },
  {
    title: "Bathroom Remodeling",
    description: "TexTech Construction is the most referred choice for bathroom upgrades in the Greater Houston area.",
    image: "/images/heros/bathroom-hero.png",
    path: "/services/bathrooms",
  },
  {
    title: "Patio Covers",
    description: "From covered patios to outdoor kitchens, we create dream outdoor living spaces for Houston families.",
    image: "/images/heros/patio-hero.png",
    path: "/services/patios",
  },
  {
    title: "Roofing",
    description: "New roof installations and repairs using dependable, durable products from top manufacturers.",
    image: "/images/heros/roof-hero.png",
    path: "/services/roofing",
  },
  {
    title: "Windows",
    description: "Energy-efficient window installation to modernize your home and reduce utility costs.",
    image: "/images/heros/window-hero.png",
    path: "/services/windows",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Remodeling Services"
          description="It is recommended that kitchens be remodeled every 15-20 years, and bathrooms every 10-15 years. Keeping your home up to date ensures your property retains its value."
        />

        {/* Featured row: first 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {SERVICES.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.path} service={service} index={i} />
          ))}
        </div>
        {/* Second row: last 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.slice(3).map((service, i) => (
            <ServiceCard key={service.path} service={service} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.path}
        className="group block relative overflow-hidden rounded-xl aspect-[4/3] bg-muted"
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-white/70 mb-3 line-clamp-2">{service.description}</p>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}


