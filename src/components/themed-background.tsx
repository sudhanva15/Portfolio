"use client";

import { useTheme } from "next-themes";

const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

export default function ThemedBackground({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  // Prefer resolved theme; fall back to the document class so first paint matches server-side fallback
  const htmlIsDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const current = resolvedTheme || (htmlIsDark ? "dark" : "light");
  const bgClass = current === "dark" ? "theme-space text-slate-100" : "theme-wireframe text-slate-900";

  return <div className={cn(bgClass)}>{children}</div>;
}
