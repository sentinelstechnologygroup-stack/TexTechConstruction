import React from "react";
import ServicePage from "./ServicePage";

const IMAGE = "/images/heros/window-hero.png";

export default function Windows() {
  return (
    <ServicePage
      title="Windows"
      image={IMAGE}
      description={[
        "Upgrading your windows is one of the best investments you can make in your home. New energy-efficient windows reduce utility costs, enhance curb appeal, and improve the comfort of your living spaces.",
        "TexTech Construction provides professional window installation services for the Greater Houston area. We work with top manufacturers to offer a wide selection of styles, materials, and energy ratings to match your home and budget.",
        "From traditional double-hung windows to modern picture windows and sliding glass doors, our team handles everything from measurement and selection through professional installation and finishing.",
      ]}
      features={[
        "Energy-efficient window installation",
        "Wide selection of styles and materials",
        "Custom fit measurements for every opening",
        "Double-hung, casement, picture, and sliding options",
        "Improved insulation and UV protection",
        "Professional installation with clean finishing",
      ]}
      gallery={[IMAGE]}
    />
  );
}


