import { Quote } from "lucide-react";
import { RatingStars } from "@/components/common/RatingStars";

interface Props { name: string; role: string; rating: number; quote: string }

export function TestimonialCard({ name, role, rating, quote }: Props) {
  return (
    <div className="flex h-full flex-col gap-5 rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
      <Quote className="size-7 text-primary/40" />
      <p className="text-base leading-relaxed text-foreground">"{quote}"</p>
      <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
        <div>
          <p className="font-heading text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
        <RatingStars value={rating} />
      </div>
    </div>
  );
}
