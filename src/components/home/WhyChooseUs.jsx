import React from "react";
import { Shield, Award, Clock, UserCheck, FileCheck, Users } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { motion } from "framer-motion";

const REASONS = [
  {
    icon: Shield,
    title: "Durable & Appealing Design",
    description: "We explain the best options for your budget and the advantages of one material over another regarding durability and style.",
  },
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "On every project, from drywall installation to painting, we strive to build trust through proactive communication and precise attention to detail.",
  },
  {
    icon: Clock,
    title: "Quality Installation",
    description: "We pledge on-time, on-budget completion of projects, with minimal disruption to the family environment.",
  },
  {
    icon: UserCheck,
    title: "Owner On-Site",
    description: "Owner Richard Takushi is on site for every project — from initial estimate to material selections — ensuring no loss of communication.",
  },
  {
    icon: FileCheck,
    title: "Fully Insured",
    description: "We always have up-to-date liability insurances. We would be happy to supply you with certificates of insurance at any time.",
  },
  {
    icon: Users,
    title: "Customer Referral List",
    description: "We have many happy customers who love to share their experience. There's no better way to choose a remodeling company.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="What Sets Us Apart"
          description="TexTech Construction is the premier kitchen and bathroom remodeling stop in the Greater Houston area. What has set us apart is not just our durable, appealing design, but also providing our clients with an efficient, conscientious, and comforting experience from start to finish."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


