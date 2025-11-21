import Link from "next/link";
import type { Profile } from "@/data/profile";

interface ContactCardProps {
  profile: Profile;
}

export default function ContactCard({ profile }: ContactCardProps) {
  const linkedinDisplay = profile.linkedin.replace(/^https?:\/\//, "");
  const contacts = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: "LinkedIn",
      value: linkedinDisplay,
      href: profile.linkedin,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: profile.resumeUrl,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        I’m currently open to full-time Product, Strategy, and Analytics roles (F1 OPT). Send a note and I’ll respond within a day.
      </p>
      <div className="mt-6 space-y-4">
        {contacts.map((contact) => (
          <div key={contact.label} className="flex flex-col gap-1 border-t border-gray-100 pt-4 dark:border-gray-800 first:border-0 first:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">{contact.label}</p>
            <Link
              href={contact.href}
              className="text-lg font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              {contact.value}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
