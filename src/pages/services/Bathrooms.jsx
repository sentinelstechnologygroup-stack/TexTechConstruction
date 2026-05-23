import React from "react";
import ServicePage from "./ServicePage";

const IMAGE = "/images/heros/bathroom-hero.png";

export default function Bathrooms() {
  return (
    <ServicePage
      title="Bathroom Remodeling"
      image={IMAGE}
      description={[
        "TexTech Construction is the most referred choice for bathroom upgrades in the Greater Houston area. It is recommended that bathrooms be remodeled every 10-15 years due to wear and tear as well as styles changing over time.",
        "Whether you're looking to update fixtures, install a walk-in shower, add a freestanding tub, or completely transform your bathroom layout, our team delivers stunning results with meticulous attention to detail.",
        "We handle every aspect of your bathroom remodel — from initial design consultation and material selection through demolition, plumbing, electrical, tile work, and final finishing touches.",
      ]}
      features={[
        "Complete bathroom gut and remodel services",
        "Walk-in shower and tub installations",
        "Custom tile work and backsplash design",
        "Vanity and cabinetry custom solutions",
        "Plumbing and electrical upgrades",
        "ADA-compliant accessibility options",
      ]}
      gallery={[IMAGE]}
    />
  );
}


