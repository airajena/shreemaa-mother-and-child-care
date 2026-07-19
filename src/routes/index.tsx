import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { MissionValues } from "@/components/sections/MissionValues";
import { DoctorsSection } from "@/components/sections/DoctorsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({ meta: [
    { title: "Shreemaa Mother and Child Care — Comprehensive Maternal & Child Specialists" },
    { name: "description", content: "Specialist gynecology, fetal medicine, IVF, painless labour, paediatric & neonatal care in one compassionate clinic." },
  ]}),
});

function Home() {
  return (
    <AppShell>
      <Hero />
      <Stats />
      <ServicesGrid limit={6} />
      <WhyChooseUs />
      <DoctorsSection limit={4} />
      <MissionValues />
      <TestimonialsSection />
      <ContactCta />
      <FaqSection />
    </AppShell>
  );
}
