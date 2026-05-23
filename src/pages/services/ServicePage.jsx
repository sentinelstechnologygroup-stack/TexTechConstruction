import React from "react";
import { CheckCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PageBanner from "../../components/shared/PageBanner";
import QuoteForm from "../../components/shared/QuoteForm";

const SERVICE_AREAS = [
  "The Woodlands", "Conroe", "Cypress", "Hockley", "Humble", "Katy",
  "Kingwood", "Magnolia", "New Caney", "Spring", "Sugar Land", "Tomball",
];

export default function ServicePage({ title, description, features, image, gallery = [], breadcrumbs }) {
  return (
    <>
      <PageBanner
        title={title}
        breadcrumbs={breadcrumbs || [{ label: "Services", path: "/" }, { label: title }]}
        backgroundImage={image}
      />

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                  {description.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {features && features.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">What We Provide</h3>
                    <ul className="space-y-3">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Gallery thumbnails */}
                {gallery.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Project Photos</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {gallery.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${title} project ${i + 1}`}
                          className="rounded-lg w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Areas */}
                <div className="mt-12 bg-muted/50 rounded-xl p-6 border border-border/50">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" /> Areas We Serve
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <span key={area} className="text-sm text-muted-foreground">{area}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="bg-muted/50 rounded-2xl p-6 md:p-8 border border-border/50">
                  <h3 className="text-lg font-semibold mb-4">Get Your Free Estimate</h3>
                  <QuoteForm compact />
                </div>

                <div className="bg-primary rounded-xl p-6 text-primary-foreground text-center">
                  <p className="text-sm opacity-70 mb-2">Call us directly</p>
                  <a href="tel:8327556533" className="text-2xl font-bold hover:text-accent transition-colors">
                    (832) 755-6533
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


