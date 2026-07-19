import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ContactCta } from "@/components/sections/ContactCta";

export const Route = createFileRoute("/treatments")({
  component: Treatments,
  head: () => ({ meta: [
    { title: "Treatments — Shreemaa Mother and Child Care" },
    { name: "description", content: "Specialist treatments across maternal, fetal, fertility, gynaec, paediatric and neonatal care." },
  ]}),
});

function Treatments() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Treatments & specialities"
        title="Specialist treatments, gently delivered."
        description="A comprehensive catalogue of care — explore each speciality and find the treatment that fits your needs."
      />
      <ServicesGrid />
      <ContactCta />
    </AppShell>
  );
}
