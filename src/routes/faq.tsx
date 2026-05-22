import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { FaqSection } from "@/components/sections/FaqSection";

export const Route = createFileRoute("/faq")({
  component: Faq,
  head: () => ({ meta: [
    { title: "FAQ — Shreemaa Mother and Child Care" },
    { name: "description", content: "Frequently asked questions about our services, packages, NICU, IVF and more." },
  ]}),
});

function Faq() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Questions answered"
        title="All your questions, in one place."
        description="If you don't see what you're looking for, our care team is one call away."
      />
      <FaqSection />
    </AppShell>
  );
}
