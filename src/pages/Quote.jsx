import React from "react";
import { Phone, Shield, Clock, Star } from "lucide-react";
import PageBanner from "../components/shared/PageBanner";
import QuoteForm from "../components/shared/QuoteForm";

const BANNER = "/images/services/kitchen-remodeling.png";

const TRUST_POINTS = [
  { icon: Shield, text: "Fully Licensed & Insured" },
  { icon: Clock, text: "Free, No-Obligation Estimates" },
  { icon: Star, text: "5-Star Rated Houston Contractor" },
];

export default function Quote() {
  return (
    <>
      <PageBanner
        title="Free Quote"
        breadcrumbs={[{ label: "Free Quote" }]}
        backgroundImage={BANNER}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  Get Started
                </span>
                <h2 className="text-3xl font-serif font-bold mb-4">
                  Request Your Free Estimate
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that your choice is an important decision, and we guarantee you will be glad you chose us! Fill out the form and one of our sales professionals will contact you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {TRUST_POINTS.map((point) => (
                  <div key={point.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm">{point.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <p className="text-sm opacity-70 mb-2">Prefer to call?</p>
                <a href="tel:8327556533" className="text-2xl font-bold flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" /> (832) 755-6533
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-muted/50 rounded-2xl p-8 md:p-10 border border-border/50">
                <h3 className="text-xl font-semibold mb-6">Tell Us About Your Project</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


