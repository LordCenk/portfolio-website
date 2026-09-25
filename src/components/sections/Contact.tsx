import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <section id="contact" className="section-scroll-offset py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionHeading eyebrow="Get In Touch" title="Contact" />
        <p className="text-muted-foreground">
          Have a role, a project, or just want to say hi? My inbox is open.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-lg font-medium">
            <FiMail className="text-brand-purple" />
            <a href={`mailto:${socials.email}`} className="hover:underline">
              {socials.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <FiMapPin className="text-brand-purple" />
            {socials.location}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href={`mailto:${socials.email}`}>
            <FiMail /> Say Hello
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand-purple hover:text-brand-purple"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg transition-colors hover:border-brand-purple hover:text-brand-purple"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
