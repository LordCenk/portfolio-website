"use client";

import { FaGithub, FaLinkedin, FaXTwitter, FaRegEnvelope } from "react-icons/fa6";
import { FiDownload, FiMail } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { useTypewriter } from "@/hooks/useTypewriter";
import { socials } from "@/data/socials";

const roles = ["Software Engineer", "Full Stack Developer", "Backend Engineer"];

const socialLinks = [
  { icon: FaGithub, href: socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: FaRegEnvelope, href: `mailto:${socials.email}`, label: "Email" },
  { icon: FaXTwitter, href: socials.x, label: "X" },
];

export function About() {
  const role = useTypewriter(roles);

  return (
    <section
      id="about"
      className="section-scroll-offset mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-24 lg:flex-row lg:py-32"
    >
      <div className="flex-1">
        <p className="text-lg text-muted-foreground">Hi, I am</p>
        <h1 className="mt-2 brand-gradient text-5xl font-extrabold leading-tight sm:text-6xl">
          {socials.name}
        </h1>
        <p className="mt-3 h-10 text-2xl font-semibold text-brand-purple">
          {role}
          <span className="animate-pulse">|</span>
        </p>

        <p className="mt-6 max-w-xl text-muted-foreground">
          I&apos;m a Computer Science Engineer passionate about developing
          high-performance, scalable web applications using{" "}
          <span className="font-semibold text-foreground">
            Java, Spring Boot, React, and Node.js
          </span>
          . I constantly improve my skills by building real projects,
          experimenting with new tools, and solving real-world development
          challenges.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={socials.resumeUrl} download>
            <FiDownload /> Download Resume
          </Button>
          <Button variant="outline" href="#contact">
            <FiMail /> Get in Touch
          </Button>
        </div>

        <div className="mt-8 flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand-purple hover:text-brand-purple"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <ProfileImage />
      </div>
    </section>
  );
}
