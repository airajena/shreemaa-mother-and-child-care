import { MapPin, Phone, Clock } from "lucide-react";

interface Props { name: string; address: string; phone: string; hours: string }

export function LocationCard({ name, address, phone, hours }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-7 shadow-soft">
      <h3 className="font-heading text-lg font-semibold">{name}</h3>
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{address}</li>
        <li className="flex items-center gap-3"><Phone className="size-4 shrink-0 text-primary" />{phone}</li>
        <li className="flex items-center gap-3"><Clock className="size-4 shrink-0 text-primary" />{hours}</li>
      </ul>
    </div>
  );
}
