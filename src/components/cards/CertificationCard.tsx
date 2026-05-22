import { ShieldCheck } from "lucide-react";

export function CertificationCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-shadow hover:shadow-card">
      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
        <ShieldCheck className="size-5" />
      </div>
      <div>
        <h3 className="font-heading text-base font-semibold">{name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
