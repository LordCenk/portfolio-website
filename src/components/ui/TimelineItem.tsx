import type { EducationItem } from "@/data/education";

export function TimelineItem({ item, last }: { item: EducationItem; last?: boolean }) {
  return (
    <div className="relative pl-10">
      <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-red via-brand-purple to-brand-blue">
        <span className="h-2 w-2 rounded-full bg-background" />
      </span>
      {!last && (
        <span className="absolute left-[9px] top-7 h-[calc(100%+2rem)] w-px bg-border" />
      )}
      <p className="text-sm font-semibold text-brand-purple">{item.period}</p>
      <h3 className="mt-1 text-xl font-semibold">{item.degree}</h3>
      <p className="text-muted-foreground">{item.institution}</p>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{item.description}</p>
    </div>
  );
}
