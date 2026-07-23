import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { Section, SectionHeader } from "@/components/layout/Section";
import { LocationCard } from "@/components/cards/LocationCard";
import { branches, contact } from "@/data/site";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact & Branches — Shreemaa Mother and Child Care" },
      {
        name: "description",
        content:
          "Visit us, call us or write to us — find branch addresses, hours and contact details.",
      },
    ],
  }),
});

function Contact() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Reach Shreemaa"
        title="We're here whenever you need us."
        description="Visit us in Sailashree Vihar, Bhubaneswar, or write to our care team."
      />
      <Section className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Phone, t: "Phone", v: contact.phone },
            { icon: Mail, t: "Email", v: contact.email },
            { icon: MapPin, t: "Address", v: contact.address },
          ].map(({ icon: Icon, t, v }) => (
            <div key={t} className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
              <div className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                <Icon className="size-5" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{t}</p>
              <p className="mt-1 font-heading text-lg font-semibold">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Our clinic" title="Visit Shreemaa Mother and Child Care" />
        <div className="mt-12 grid gap-5">
          {branches.map((b) => (
            <LocationCard key={b.name} {...b} />
          ))}
        </div>
      </Section>
    </AppShell>
  );
}
