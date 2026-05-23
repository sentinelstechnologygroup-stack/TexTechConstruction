import React from "react";
import ServicePage from "./ServicePage";

const IMAGE = "/images/heros/patio-hero.png";

export default function Patios() {
  return (
    <ServicePage
      title="Patio Covers & Outdoor Living"
      image={IMAGE}
      description={[
        "Adding a patio cover to your home has a number of benefits — from adding value to your home, protecting you from heat, sun, rain and bugs, it creates another room for you and your family to enjoy each other and make memories.",
        "There are different styles of patio covers to choose from like pergolas, screen rooms, or simply to match the roof and brick of your home. Whatever your taste, the professionals at TexTech Construction can help you build your dream outdoor living space.",
        "TexTech Construction has a variety of patio cover products and a reputable relationship with many of the top manufacturers. The products we use are dependable and durable even through the test of Mother Nature.",
        "If you want to create a relaxing area to cook and entertain, you should consider having an outdoor kitchen incorporated into your cover's design. There are many different styles of outdoor kitchens that can be created — whether it's a standard granite counter top, raised bar, or a custom design — we can make your outdoor kitchen surpass your needs and expectations.",
      ]}
      features={[
        "Custom patio cover design and installation",
        "Pergolas, screen rooms, and roof-matched covers",
        "Outdoor kitchen design and construction",
        "Custom masonry and stonework",
        "Granite countertops and raised bar options",
        "Durable products from top manufacturers",
      ]}
      gallery={[IMAGE]}
    />
  );
}


