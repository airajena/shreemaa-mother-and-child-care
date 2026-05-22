import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { Section, SectionHeader } from "@/components/layout/Section";
import { MissionValues } from "@/components/sections/MissionValues";
import { Baby, FlaskConical, Stethoscope } from "lucide-react";

const pillars = [
  { icon: Stethoscope, title: "Gynaecology", desc: "Routine gynec care, high-risk pregnancy, cosmetic & uro-gynecology, gynec oncology and endoscopic surgery." },
  { icon: Baby, title: "Paediatrics & Neonatology", desc: "Newborn care, vaccinations, growth monitoring, Level III NICU and phototherapy." },
  { icon: FlaskConical, title: "IVF & Infertility", desc: "Personalised fertility workup, IUI, IVF, ICSI and reproductive endocrinology." },
];

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({ meta: [
    { title: "About — Shreemaa Mother and Child Care" },
    { name: "description", content: "Our clinic, our specialities, and the values that guide everything we do." },
  ]}),
});

function About() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="About Shreemaa"
        title="Care that's been with families for generations."
        description="Shreemaa was founded on a simple idea — that motherhood and childhood deserve unhurried, ethical, specialist-led care."
      />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1200&q=80"
            alt="Inside Shreemaa clinic"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <SectionHeader
              align="left"
              eyebrow="About the clinic"
              title="A multi-speciality clinic built around mother and child."
              description="From preconception counselling to your child's adolescence, our integrated team walks with you at every step."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our facility houses modular operation theatres, a dedicated Level III
              NICU, advanced ultrasound and fetal medicine suites, and an in-house
              IVF lab — all under one roof for continuity of care.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-soft">
        <SectionHeader eyebrow="Our three pillars" title="Specialised, integrated, family-centred" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
              <div className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <MissionValues />
    </AppShell>
  );
}
