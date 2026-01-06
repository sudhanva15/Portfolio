"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
          Sudhanva Kashyap
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition hover:text-gray-900 dark:hover:text-white ${
                isActive(item.href) ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-600 dark:border-gray-800 dark:text-gray-300 dark:hover:text-blue-400 sm:inline-flex"
            aria-label="Email Sudhanva"
          >
            Get in touch
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
