"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Get started",
    links: [
      { href: "/docs/getting-started", label: "Getting started" },
      { href: "/docs/install", label: "Install" },
    ],
  },
  {
    title: "Reference",
    links: [
      { href: "/docs/cli", label: "CLI reference" },
      { href: "/docs/compat", label: "Maven compatibility" },
      { href: "/docs/faq", label: "FAQ" },
    ],
  },
];

export function DocsNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-6 text-sm">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-1">
          <p className="px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {section.title}
          </p>
          {section.links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "rounded-md bg-muted px-2 py-1.5 font-medium text-foreground"
                    : "rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
