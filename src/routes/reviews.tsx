import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { Section } from "@/components/layout/Section";
import { RatingStars } from "@/components/common/RatingStars";

const breakdown = [
  { stars: 5, pct: 86 },
  { stars: 4, pct: 11 },
  { stars: 3, pct: 2 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

export const Route = createFileRoute("/reviews")({
  component: Reviews,
  head: () => ({ meta: [
    { title: "Reviews & Ratings — Shreemaa Mother and Child Care" },
    { name: "description", content: "Patient ratings, review breakdown and clinic feedback." },
  ]}),
});

function Reviews() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Reviews & ratings"
        title="What patients are saying"
        description="Transparent ratings — verified by our care team."
      />
      <Section className="py-10 md:py-16">
        <div className="grid items-center gap-10 rounded-3xl border border-border/70 bg-card p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="font-heading text-6xl font-semibold md:text-7xl">4.9</p>
            <RatingStars value={5} size={22} className="mt-2" />
            <p className="mt-3 text-sm text-muted-foreground">Based on 2,400+ verified reviews</p>
          </div>
          <div className="space-y-3">
            {breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3">
                <span className="w-10 text-sm text-muted-foreground">{b.stars}★</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${b.pct}%` }} />
                </div>
                <span className="w-10 text-right text-sm text-muted-foreground">{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
