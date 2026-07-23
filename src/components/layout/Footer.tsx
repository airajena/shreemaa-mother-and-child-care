import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

const groups = [
  {
    title: "Care",
    links: [
      { to: "/treatments", label: "Treatments" },
      { to: "/doctors", label: "Doctors" },
    ],
  },
  {
    title: "Clinic",
    links: [
      { to: "/about", label: "About" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/reviews", label: "Reviews & Ratings" },
      { to: "/faq", label: "FAQ" },
    ],
  },
  { title: "Reach us", links: [{ to: "/contact", label: "Contact & Branches" }] },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-soft">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="size-10 overflow-hidden rounded-2xl bg-white shadow-soft">
                <img
                  src="/shreemaa-logo.jpg"
                  alt="Shreemaa Mother and Child Care"
                  className="size-full object-cover"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-lg font-semibold">Shreemaa</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Mother & Child Care
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Comprehensive maternal, fetal, fertility and neonatal care under one roof — delivered
              with compassion, ethics, and clinical excellence.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-primary" />
                {contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                {contact.email}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="size-4 text-primary" />
                {contact.address}
              </li>
            </ul>
          </div>
          {groups.map((g) => (
            <div key={g.title} className="md:col-span-2">
              <h4 className="font-heading text-sm font-semibold text-foreground">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Shreemaa Mother and Child Care. All rights reserved.</p>
          <p>Compassionate care · NABH accredited · Level III NICU</p>
        </div>
      </div>
    </footer>
  );
}
