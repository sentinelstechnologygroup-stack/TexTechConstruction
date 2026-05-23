import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/heros/home-hero.png";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(560px, 90vh, 900px)" }}
      role="banner"
    >
      {/* Background image — absolutely fills the section */}
      <img
        src={HERO_IMAGE}
        alt="Houston skyline at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />

      {/* Content — viewport-aware positioning, no max-w constraints that shift at zoom */}
      <div
        className="absolute w-full"
        style={{
          top: "clamp(100px, 20%, 220px)",
          left: 0,
          right: 0,
          padding: "0 clamp(1.25rem, 5vw, 5rem)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "clamp(320px, 55vw, 760px)" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-white/70 text-sm">Houston's Trusted Contractor</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
            Home &amp; Commercial Remodeling in{" "}
            <span className="text-accent">Houston</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
            From stunning kitchen transformations to beautiful outdoor living spaces, TexTech Construction delivers premium remodeling with owner-led project management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto">
                Get Your Free Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:8327556533">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" /> (832) 755-6533
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </div>
    </section>
  );
}


