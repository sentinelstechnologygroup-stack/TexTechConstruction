import React from "react";
import ServicePage from "./ServicePage";

const IMAGE = "/images/heros/roof-hero.png";

export default function Roofing() {
  return (
    <ServicePage
      title="Roofing"
      image={IMAGE}
      description={[
        "Your roof is your home's first line of defense against the elements. TexTech Construction provides professional new roof installation and repair services across the Greater Houston area.",
        "We use dependable, durable products from top manufacturers to ensure your roof withstands Houston's heat, storms, and the test of time. Our team handles every aspect of the roofing process from inspection and material selection through installation and final cleanup.",
        "Whether you need a full roof replacement after storm damage, a new installation for new construction, or targeted repairs, TexTech Construction delivers quality workmanship with owner-led project management.",
      ]}
      features={[
        "New roof installation",
        "Roof repair and storm damage restoration",
        "Top-quality shingles and roofing materials",
        "Free roof inspections and estimates",
        "Owner on-site for every project",
        "Fully insured with certificates available on request",
      ]}
      gallery={[IMAGE]}
    />
  );
}


