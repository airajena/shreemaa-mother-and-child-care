import { Link } from "@tanstack/react-router";
import { Calendar, GraduationCap, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Doctor {
  name: string; role: string; exp: string; consults: string; edu: string;
  avail: string; img: string; tags: string[];
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-soft">
        <img
          src={doctor.img}
          alt={doctor.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {doctor.tags.slice(0, 2).map((t) => (
            <span key={t} className="rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-heading text-lg font-semibold">{doctor.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{doctor.role}</p>
        </div>
        <ul className="grid gap-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Stethoscope className="size-4 text-primary" />{doctor.exp} experience</li>
          <li className="flex items-center gap-2"><Users className="size-4 text-primary" />{doctor.consults} consultations</li>
          <li className="flex items-start gap-2"><GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />{doctor.edu}</li>
          <li className="flex items-start gap-2"><Calendar className="mt-0.5 size-4 shrink-0 text-primary" />{doctor.avail}</li>
        </ul>
        <Button asChild className="mt-auto rounded-full bg-gradient-brand">
          <Link to="/appointment">Book with {doctor.name.split(" ")[1]}</Link>
        </Button>
      </div>
    </div>
  );
}
