import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa6";
import { socials } from "@/data/socials";

const links = [
  { icon: FaGithub, href: socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FaRegEnvelope, href: `mailto:${socials.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {socials.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
