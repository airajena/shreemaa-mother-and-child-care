import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";

export function AppointmentCta() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-center text-primary-foreground shadow-elevated md:p-16">
        <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 size-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Start your care journey
          </span>
          <h2 className="mt-5 text-balance font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Care for mother & child, when you need it most.
          </h2>
          <p className="mt-4 text-balance text-sm text-white/85 md:text-base">
            Book a consultation with our specialists — same-day slots available.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="h-12 rounded-full bg-white px-7 text-foreground hover:bg-white/90">
              <Link to="/appointment">Book Appointment <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/40 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
