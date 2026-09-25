"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-purple/15 font-mono text-brand-purple">
            {"</>"}
          </span>
          <span>
            shashank<span className="text-brand-purple">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="text-2xl md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
        style={{ transition: "max-height 0.2s ease" }}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
