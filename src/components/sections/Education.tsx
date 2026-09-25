import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="section-scroll-offset bg-muted/40 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="My Journey" title="Education" />
        <div className="flex flex-col gap-12">
          {education.map((item, i) => (
            <TimelineItem key={item.degree} item={item} last={i === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
