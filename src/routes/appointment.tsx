import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/layout/AppShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { doctors, services } from "@/data/site";
import type { FormEvent } from "react";
import { CalendarCheck, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/appointment")({
  component: Appointment,
  head: () => ({ meta: [
    { title: "Book an Appointment — Shreemaa Mother and Child Care" },
    { name: "description", content: "Schedule a consultation with our specialists. Same-day slots often available." },
  ]}),
});

function Appointment() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Appointment request received", {
      description: "Our care team will call you shortly to confirm your slot.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <AppShell>
      <Toaster richColors position="top-center" />
      <PageHeader
        eyebrow="Book appointment"
        title="Schedule your visit in under a minute."
        description="Choose a specialist, a date, and we'll confirm by phone."
      />
      <Section className="py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft md:p-10">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full name"><Input required placeholder="Your name" /></Field>
                <Field label="Phone"><Input required type="tel" placeholder="+91" /></Field>
                <Field label="Email"><Input type="email" placeholder="you@email.com" /></Field>
                <Field label="Patient age"><Input type="number" min={0} placeholder="e.g. 32" /></Field>

                <Field label="Preferred date"><Input required type="date" /></Field>
                <Field label="Preferred time">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Choose a slot" /></SelectTrigger>
                    <SelectContent>
                      {["09:00 AM","10:30 AM","12:00 PM","02:30 PM","04:00 PM","06:00 PM"].map(t => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field label="Speciality">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select speciality" /></SelectTrigger>
                    <SelectContent>
                      {services.map(s => <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Preferred doctor">
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Any available specialist" /></SelectTrigger>
                    <SelectContent>
                      {doctors.map(d => <SelectItem key={d.name} value={d.name}>{d.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>

                <div className="md:col-span-2">
                  <Field label="Your concern">
                    <Textarea placeholder="Briefly describe your symptoms or concern" rows={4} />
                  </Field>
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-8 w-full rounded-full bg-gradient-brand md:w-auto md:px-10">
                Request appointment
              </Button>
            </form>
          </div>

          <aside className="space-y-4">
            {[
              { icon: CalendarCheck, t: "Same-day slots", d: "Most specialities offer same-day or next-day appointments." },
              { icon: Clock, t: "24/7 emergency", d: "Obstetric & paediatric emergencies handled round the clock." },
              { icon: ShieldCheck, t: "Cashless insurance", d: "Empanelled with major insurers for cashless admission." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border/70 bg-card p-6 shadow-soft">
                <div className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
