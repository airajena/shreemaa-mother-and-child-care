import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
}

export function Section({ id, children, className, containerClassName, bleed }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn(!bleed && "mx-auto w-full max-w-7xl px-5 md:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface EyebrowProps { children: ReactNode; className?: string }
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary",
      className
    )}>
      <span className="size-1.5 rounded-full bg-primary" />{children}
    </span>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}
export function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-col gap-4",
      align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
      className
    )}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-balance text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}
