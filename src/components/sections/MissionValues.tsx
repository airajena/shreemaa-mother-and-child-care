import { Section, SectionHeader } from "@/components/layout/Section";
import { HandHeart, Scale, Sparkles, Shield } from "lucide-react";

const values = [
  { icon: HandHeart, title: "Compassion", desc: "We treat every patient like family — gentle, unhurried, present." },
  { icon: Scale, title: "Ethics", desc: "Transparent counselling, fair pricing, evidence-based recommendations." },
  { icon: Shield, title: "Trust", desc: "Confidentiality and dignity in every consultation, every time." },
  { icon: Sparkles, title: "Excellence", desc: "Continuous clinical learning and modern infrastructure." },
];

export function MissionValues() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Mission · Morals · Ethics"
        title="The Shreemaa promise"
        description="Founded on the belief that motherhood and childhood deserve the most thoughtful, ethical care medicine can offer."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-3xl border border-border/70 bg-gradient-card-glow p-7 shadow-soft">
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-soft">
              <Icon className="size-5" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
