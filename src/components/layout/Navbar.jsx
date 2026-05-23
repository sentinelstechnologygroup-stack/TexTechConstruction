import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    children: [
      { label: "Kitchen Remodeling", path: "/services/kitchens" },
      { label: "Bathroom Remodeling", path: "/services/bathrooms" },
      { label: "Patio Covers", path: "/services/patios" },
      { label: "Roofing", path: "/services/roofing" },
      { label: "Windows", path: "/services/windows" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServiceOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between text-sm">
          <a href="tel:8327556533" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(832) 755-6533</span>
          </a>
          <a href="mailto:Info@TexTechConstruction.com" className="text-white/90 hover:text-white transition-colors hidden sm:block">
            Info@TexTechConstruction.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img
              src="/images/logos/logo.png"
              alt="TexTech Construction"
              className={`h-12 md:h-14 w-auto object-contain transition-all `}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                      scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-white"
                    }`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-xl border border-border/50 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    location.pathname === item.path
                      ? "text-accent"
                      : scrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link to="/quote" className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-full">
                Free Quote
              </Button>
            </Link>
            <button
              className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" role="navigation" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground"
                    onClick={() => setServiceOpen(!serviceOpen)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${serviceOpen ? "rotate-180" : ""}`} />
                  </button>
                  {serviceOpen && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-3 text-sm font-medium text-foreground hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Link to="/quote">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}



