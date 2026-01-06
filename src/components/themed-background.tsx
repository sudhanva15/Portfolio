"use client";

import { useTheme } from "next-themes";

const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

export default function ThemedBackground({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const current = theme === "system" ? systemTheme : theme;
  const bgClass = current === "dark" ? "theme-space text-slate-100" : "theme-wireframe text-slate-900";
  return <div className={cn(bgClass)}>{children}</div>;
}
