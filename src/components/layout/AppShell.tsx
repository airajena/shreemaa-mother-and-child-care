import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-16 pt-20 text-center md:px-8 md:pb-24 md:pt-28">
        {eyebrow && (
          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 text-balance font-heading text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">{description}</p>}
      </div>
    </section>
  );
}
