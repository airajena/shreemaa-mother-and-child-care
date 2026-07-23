import { Section, SectionHeader } from "@/components/layout/Section";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { doctors } from "@/data/site";

export function DoctorsSection({ limit }: { limit?: number }) {
  const list = limit ? doctors.slice(0, limit) : doctors;

  const gridColsClass =
    list.length === 1
      ? "grid-cols-1 max-w-sm mx-auto"
      : list.length === 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto"
      : list.length === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <Section id="doctors">
      <SectionHeader
        eyebrow="Meet our specialists"
        title="Health support from expert doctors"
        description="Compassionate, board-certified specialists who take the time to truly listen."
      />
      <div className={`mt-14 grid gap-6 ${gridColsClass}`}>
        {list.map((d) => <DoctorCard key={d.name} doctor={d} />)}
      </div>
    </Section>
  );
}
