"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const groups = [
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
    <aside className="docs-side">
      {groups.map((group) => (
        <div key={group.title}>
          <h4>{group.title}</h4>
          <ul>
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={pathname === link.href ? "active" : undefined}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
