import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Our mission is to leave you completely impressed with the quality and service that you receive. We guarantee you will be glad you chose us!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/quote">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold rounded-full px-8 h-14 text-base gap-2">
              Request Free Estimate <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <a href="tel:8327556533">
            <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base gap-2">
              <Phone className="w-4 h-4" /> (832) 755-6533
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}


