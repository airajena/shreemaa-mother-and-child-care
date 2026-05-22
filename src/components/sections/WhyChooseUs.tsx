import { Section, SectionHeader } from "@/components/layout/Section";
import { Heart, Hospital, Microscope, Users } from "lucide-react";

const items = [
  { icon: Heart, title: "Compassion first", desc: "Care delivered with patience, dignity and warmth — for mothers and little ones." },
  { icon: Microscope, title: "Specialist-led", desc: "Sub-speciality teams in fetal medicine, IVF, oncology and neonatology." },
  { icon: Hospital, title: "Modern infrastructure", desc: "Modular OTs, Level III NICU and advanced imaging on-site." },
  { icon: Users, title: "Family-centred", desc: "Birthing partners, lactation support and parental education built in." },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-gradient-soft">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Why families choose Shreemaa"
            title="Leading with heart and expertise."
            description="A multi-disciplinary team committed to evidence-based medicine and unhurried, human care."
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
              <div className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
