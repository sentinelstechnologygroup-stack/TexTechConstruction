import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageBanner from "../components/shared/PageBanner";
import QuoteForm from "../components/shared/QuoteForm";

const BANNER = "/images/heros/contact-hero.png";

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "(832) 755-6533", href: "tel:8327556533" },
  { icon: Mail, label: "Email", value: "Info@TexTechConstruction.com", href: "mailto:Info@TexTechConstruction.com" },
  { icon: MapPin, label: "Service Area", value: "50-mile radius from Houston, TX", href: null },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 7:00 AM – 6:00 PM", href: null },
];

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage={BANNER}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl font-serif font-bold mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to leave you completely impressed with the quality and service that you receive, and that you have received a great value for your investment.
                </p>
              </div>

              <div className="space-y-5">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="font-medium hover:text-accent transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote form */}
            <div className="lg:col-span-3">
              <div className="bg-muted/50 rounded-2xl p-8 md:p-10 border border-border/50">
                <h3 className="text-xl font-semibold mb-6">Request a Quote</h3>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


