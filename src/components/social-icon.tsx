/**
 * Social Icon Component
 * Clean, accessible icon links for email and LinkedIn
 */

import Link from "next/link";
import { Mail, Linkedin, type LucideIcon } from "lucide-react";

interface SocialIconProps {
  href: string;
  label: string;
  icon: "mail" | "linkedin";
  variant?: "solid" | "ghost";
  size?: number;
  showLabel?: boolean;
}

const iconMap: Record<string, LucideIcon> = {
  mail: Mail,
  linkedin: Linkedin,
};

export default function SocialIcon({
  href,
  label,
  icon,
  variant = "ghost",
  size = 20,
  showLabel = false,
}: SocialIconProps) {
  const Icon = iconMap[icon];
  
  const baseClasses = "inline-flex items-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-950";
  
  const variantClasses = {
    solid: "bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100",
    ghost: "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-gray-800",
  };

  return (
    <Link
      href={href}
      target={icon === "linkedin" ? "_blank" : undefined}
      rel={icon === "linkedin" ? "noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses[variant]}`}
      aria-label={label}
      title={label}
    >
      <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
      {showLabel && <span className="text-sm font-medium">{label}</span>}
      {!showLabel && label && <span className="sr-only">{label}</span>}
    </Link>
  );
}
