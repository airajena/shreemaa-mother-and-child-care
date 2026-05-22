import { Section, SectionHeader } from "@/components/layout/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FaqSection() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title="All your questions, answered"
        description="Can't find what you need? Reach out to our care team anytime."
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border/70 bg-card px-5 shadow-soft data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-base font-medium hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
