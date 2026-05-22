import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function RatingStars({ value = 5, size = 16, className }: { value?: number; size?: number; className?: string }) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={cn(i < value ? "fill-accent text-accent" : "text-muted-foreground/30")}
        />
      ))}
    </div>
  );
}
