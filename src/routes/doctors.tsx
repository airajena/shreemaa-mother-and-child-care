import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { AppointmentCta } from "@/components/sections/AppointmentCta";

export const Route = createFileRoute("/doctors")({
  component: Doctors,
  head: () => ({ meta: [
    { title: "Our Doctors — Shreemaa Mother and Child Care" },
    { name: "description", content: "Meet our specialists — obstetricians, fertility experts, paediatricians and neonatologists." },
  ]}),
});

function Doctors() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Doctor's Note"
        title="Meet the specialists who care for your family."
        description="Board-certified experts with the time, training and temperament for mother and child."
      />
      <DoctorsSection />
      <AppointmentCta />
    </AppShell>
  );
}
