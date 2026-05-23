import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageBanner({ title, breadcrumbs = [], backgroundImage }) {
  return (
    <section
      className="relative min-h-[320px] md:min-h-[400px] flex items-end"
      role="banner"
    >
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pb-12 md:pb-16 pt-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3.5 h-3.5" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}


