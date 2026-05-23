import React from "react";
import { Shield, UserCheck, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageBanner from "../components/shared/PageBanner";
import CTASection from "../components/home/CTASection";

const ABOUT_IMAGE = "/images/heros/about-hero.png";
const KITCHEN_IMAGE = "/images/heros/kitchen-hero.png";

const VALUES = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "We always have up-to-date liability insurances. We would be happy to supply you with certificates of insurance at any time.",
  },
  {
    icon: UserCheck,
    title: "Owner On-Site",
    description: "Owner Richard Takushi is on site for every project — from your initial estimate through material selections and every phase of construction.",
  },
  {
    icon: Users,
    title: "Customer Referrals",
    description: "There is no better way to pick a remodeling company than hearing what a past customer has to say. We have many happy customers who love to share their experience.",
  },
  {
    icon: Award,
    title: "Full-Service Contractor",
    description: "From kitchen remodels and bathroom upgrades to patio covers, outdoor kitchens, custom masonry, and new roof installations.",
  },
];

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: "About" }]}
        backgroundImage={ABOUT_IMAGE}
      />

      {/* Story section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                What Sets Us Apart Is Our Experience
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TexTech Construction is a Houston-based business with deep roots in the local residential and commercial construction industry. With every job, we strive for complete client satisfaction.
                </p>
                <p>
                  For years, TexTech Construction has been providing Houstonians with top of the line products and service while helping bring their dreams and plans of the perfect home to life. We are a full service contractor providing kitchen remodels, bathroom remodels, patio cover installation, outdoor kitchens, custom masonry, new roof installations and other construction services.
                </p>
                <p>
                  Our diversified team of services and sales professionals can help you create your dream outdoor living area while consistently attempting to provide a superior level of communication and workmanship on all of our projects.
                </p>
              </div>
              <Link to="/quote" className="inline-block mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={KITCHEN_IMAGE}
                alt="Kitchen remodeling by TexTech Construction"
                className="rounded-xl shadow-2xl w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-xl p-6 shadow-xl hidden md:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm opacity-80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Key Points
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Things to Consider When Choosing a Remodeling Company
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-5 bg-card rounded-xl p-8 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}


