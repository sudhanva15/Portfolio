import { siteCopy } from "@/content/siteCopy";

interface PlaceholderFrameProps {
  label?: string;
  className?: string;
}

export default function PlaceholderFrame({ label = siteCopy.placeholders.screenshot, className }: PlaceholderFrameProps) {
  const baseClasses =
    "flex h-40 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-xs text-gray-500 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400";
  const classes = className ? `${baseClasses} ${className}` : baseClasses;
  return <div className={classes}>{label}</div>;
}
