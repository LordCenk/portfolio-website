import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-scroll-offset py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="What I Know" title="Skills" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-brand-purple">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
