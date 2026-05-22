import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function ServiceCard({ icon: Icon, title, desc }: Props) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between">
        <div className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
          <Icon className="size-5" />
        </div>
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <div>
        <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
