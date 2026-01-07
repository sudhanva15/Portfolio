"use client";

import { useTheme } from "next-themes";

const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

export default function ThemedBackground({ children }: { children: React.ReactNode }) {
  // Use resolvedTheme to avoid first-paint/hydration mismatch
  const { resolvedTheme } = useTheme();
  // Avoid forcing dark on first paint — prefer the light background until the theme is resolved
  const current = resolvedTheme || "light";
  const bgClass = current === "dark" ? "theme-space text-slate-100" : "theme-wireframe text-slate-900";
  return <div className={cn(bgClass)}>{children}</div>;
}
