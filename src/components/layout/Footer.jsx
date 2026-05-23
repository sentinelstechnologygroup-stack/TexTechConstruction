import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, ArrowUp } from "lucide-react";

const SERVICES = [
  { label: "Kitchen Remodeling", path: "/services/kitchens" },
  { label: "Bathroom Remodeling", path: "/services/bathrooms" },
  { label: "Patio Covers", path: "/services/patios" },
  { label: "Roofing", path: "/services/roofing" },
  { label: "Windows", path: "/services/windows" },
];

const AREAS = [
  "Houston", "The Woodlands", "Katy", "Sugar Land", "Spring",
  "Tomball", "Cypress", "Humble", "Kingwood", "Conroe",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/images/logos/logo.png"
              alt="TexTech Construction"
              className="h-14 w-auto object-contain "
            />
            <p className="text-sm leading-relaxed opacity-80">
              Houston's premier home and commercial remodeling contractor. Providing top-quality kitchen, bathroom, and exterior renovation services for the Greater Houston area.
            </p>
            <a
              href="https://www.facebook.com/TexTechConstruction.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Visit TexTech on Facebook"
            >
              <Facebook className="w-4 h-4" /> Follow us on Facebook
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {AREAS.map((area) => (
                <li key={area} className="text-sm opacity-70">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-accent">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:8327556533" className="flex items-center gap-2.5 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 text-accent shrink-0" />
                  (832) 755-6533
                </a>
              </li>
              <li>
                <a href="mailto:Info@TexTechConstruction.com" className="flex items-center gap-2.5 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  Info@TexTechConstruction.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm opacity-80">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Serving 50-mile radius from Houston, TX</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm opacity-80">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                Mon – Sat: 7:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} TexTech Construction Services. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}



