import Link from "next/link";
import SocialIcon from "@/components/social-icon";
import type { Profile } from "@/data/profile";

interface ContactCardProps {
  profile: Profile;
}

export default function ContactCard({ profile }: ContactCardProps) {
  const linkedinDisplay = profile.linkedin.replace(/^https?:\/\//, "");
  const contacts = [
    {
      label: "LinkedIn",
      value: linkedinDisplay,
      href: profile.linkedin,
    },
  ];

  return (
    <div className="rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface-ticked">
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
        <p className="border-t border-gray-100 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
          Want my latest resume? Use the Get in touch button in the header to request it.
        </p>
      </div>
      {/* Icon row */}
      <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
        <SocialIcon
          href={profile.linkedin}
          label="LinkedIn profile"
          icon="linkedin"
          variant="solid"
          size={18}
        />
      </div>
    </div>
  );
}
