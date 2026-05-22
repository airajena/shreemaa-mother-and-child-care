import { Section, SectionHeader } from "@/components/layout/Section";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <Section className="bg-gradient-soft">
      <SectionHeader
        eyebrow="Words from our families"
        title="Trusted care, naturally delivered"
        description="Real stories from mothers, fathers and grateful families."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
      </div>
    </Section>
  );
}
