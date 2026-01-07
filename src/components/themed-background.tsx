"use client";

import { useTheme } from "next-themes";

const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

export default function ThemedBackground({ children }: { children: React.ReactNode }) {
  // Use resolvedTheme to avoid first-paint/hydration mismatch
  const { resolvedTheme } = useTheme();
  // If next-themes already applied a class to the document, prefer that to avoid visual mismatch
  const htmlHasDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark");
  const current = resolvedTheme || (htmlHasDark ? "dark" : "light");
  const bgClass = current === "dark" ? "theme-space text-slate-100" : "theme-wireframe text-slate-900";
  return <div className={cn(bgClass)}>{children}</div>;
}
