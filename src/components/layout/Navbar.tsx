import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="size-9 overflow-hidden rounded-xl bg-white shadow-soft">
            <img
              src="/shreemaa-logo.jpg"
              alt="Shreemaa Mother and Child Care"
              className="size-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-semibold tracking-tight">Shreemaa</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Mother & Child Care
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary-soft text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-gradient-brand shadow-soft hover:opacity-95">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-xl border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full bg-gradient-brand">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
