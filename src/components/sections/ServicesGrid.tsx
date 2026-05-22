import { Section, SectionHeader } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function ServicesGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Complete care solutions"
        title="Specialist services, all under one compassionate roof"
        description="From the first scan to your child's first vaccination — every chapter of your family's health, supported by experts."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
      {limit && (
        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/treatments">View all treatments</Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
