import React from "react";
import ServicePage from "./ServicePage";

const IMAGE = "/images/heros/kitchen-hero.png";

export default function Kitchens() {
  return (
    <ServicePage
      title="Kitchen Remodeling"
      image={IMAGE}
      description={[
        "When remodeling your kitchen, the first step — and the most important — is choosing a kitchen designer you can trust. Whether you're looking for a sleek modern look, something more traditional and elegant, or anything in between, we have the experience and advanced training to get the job done right the first time.",
        "TexTech Construction is focused on providing high-quality service and customer satisfaction. We will do everything we can to meet your expectations.",
        "We are a full-service kitchen designer. Our designs combine elegance and style with comfortable simplicity and a respect for tradition. We believe in a comprehensive approach to architecture and are as comfortable with modern styles as with timeless classics.",
        "We will walk through the process with you step-by-step, from the initial meeting to discuss the property to drawings and building consultations.",
      ]}
      features={[
        "All employees hand-selected for experience, training, and courtesy",
        "Comprehensive design approach — modern to timeless classic styles",
        "Step-by-step project walkthrough from initial meeting to completion",
        "Custom cabinetry and countertop solutions",
        "Full electrical and plumbing coordination",
        "Material selection guidance and ordering",
      ]}
      gallery={[IMAGE]}
    />
  );
}


