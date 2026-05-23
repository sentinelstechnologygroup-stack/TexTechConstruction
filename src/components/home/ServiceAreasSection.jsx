import React from "react";
import { MapPin } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const AREAS = [
  "Houston", "The Woodlands", "Conroe", "Cypress", "Hockley",
  "Humble", "Katy", "Kingwood", "Magnolia", "New Caney",
  "Spring", "Sugar Land", "Tomball",
];

export default function ServiceAreasSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Service Areas"
          title="Serving the Greater Houston Area"
          description="We proudly offer our remodeling services within a 50-mile radius of Houston, TX."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2.5 bg-card rounded-lg px-4 py-3 border border-border/50"
            >
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


