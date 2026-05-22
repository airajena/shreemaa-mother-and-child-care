import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({ meta: [
    { title: "Testimonials — Shreemaa Mother and Child Care" },
    { name: "description", content: "Real stories from the families we've cared for." },
  ]}),
});

function Testimonials() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Family stories"
        title="Words from those who matter most."
        description="Honest, unedited reflections from mothers, fathers and families."
      />
      <TestimonialsSection />
    </AppShell>
  );
}
