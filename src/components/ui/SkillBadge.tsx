export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-purple hover:text-brand-purple">
      {label}
    </span>
  );
}
