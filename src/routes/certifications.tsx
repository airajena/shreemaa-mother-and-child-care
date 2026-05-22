import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { Section, SectionHeader } from "@/components/layout/Section";
import { CertificationCard } from "@/components/cards/CertificationCard";
import { certifications } from "@/data/site";

export const Route = createFileRoute("/certifications")({
  component: Certifications,
  head: () => ({ meta: [
    { title: "Quality & Accreditations — Shreemaa Mother and Child Care" },
    { name: "description", content: "Our quality certifications, accreditations and clinical safety protocols." },
  ]}),
});

function Certifications() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Quality accreditation"
        title="Care you can verify, trust you can feel."
        description="Independent accreditations and modern clinical safety standards — because trust starts with transparency."
      />
      <Section>
        <SectionHeader eyebrow="Our accreditations" title="Certified, audited, and continuously improving" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => <CertificationCard key={c.name} {...c} />)}
        </div>
      </Section>
    </AppShell>
  );
}
