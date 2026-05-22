import { stats } from "@/data/site";
import { Section } from "@/components/layout/Section";

export function Stats() {
  return (
    <Section className="py-12 md:py-16">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:grid-cols-4 md:p-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 text-center">
            <p className="bg-gradient-brand bg-clip-text font-heading text-3xl font-semibold text-transparent md:text-5xl">{s.value}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
