export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="text-sm font-semibold uppercase tracking-wider text-brand-purple">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <span className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-red via-brand-purple to-brand-blue" />
    </div>
  );
}
