import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/layout/Section";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* decorative blurs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 size-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-20 pt-16 text-center md:px-8 md:pb-32 md:pt-24">
        <Eyebrow>Mother & Child Care Specialists</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Wellness starts with care{" "}
          <span className="bg-gradient-brand bg-clip-text text-transparent">that truly listens.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          Comprehensive maternal, fetal, fertility and paediatric care under one
          roof — delivered by specialists, with the warmth of a family that's
          been there.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-12 rounded-full bg-gradient-brand px-7 shadow-card hover:opacity-95">
            <Link to="/contact">Contact Us <ArrowRight className="size-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-border/80 bg-background/60 px-7 backdrop-blur">
            <Link to="/treatments">Explore Treatments</Link>
          </Button>
        </div>

        {/* trust strip */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "NABH Accredited" },
            { icon: Sparkles, label: "Level III NICU" },
            { icon: ShieldCheck, label: "Painless Labour" },
            { icon: Sparkles, label: "24/7 Emergency" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card/70 px-3 py-3 text-xs font-medium text-foreground backdrop-blur">
              <Icon className="size-4 text-primary" />{label}
            </div>
          ))}
        </div>

        {/* floating doctor card mockup */}
        <div className="relative mt-16 w-full max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-elevated">
            <img
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1600&q=80"
              alt="Shreemaa care team"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="absolute -left-2 top-8 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary"><ShieldCheck className="size-5" /></div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Patient satisfaction</p>
                <p className="font-heading text-lg font-semibold">98%</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 bottom-8 hidden rounded-2xl border border-border/60 bg-card/90 p-4 shadow-card backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-accent/20 text-accent-foreground"><Sparkles className="size-5" /></div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Babies delivered</p>
                <p className="font-heading text-lg font-semibold">25,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
