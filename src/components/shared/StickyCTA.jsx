import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, FileText } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10 p-3 flex gap-3">
      <a
        href="tel:8327556533"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white rounded-full py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <Link
        to="/quote"
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground rounded-full py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
      >
        <FileText className="w-4 h-4" /> Free Quote
      </Link>
    </div>
  );
}


