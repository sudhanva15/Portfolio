import type { Profile } from "@/data/profile";
import { siteCopy } from "@/content/siteCopy";

interface ContactCardProps {
  profile: Profile;
}

export default function ContactCard({ profile }: ContactCardProps) {
  void profile;

  return (
    <div className="rounded-2xl border p-6 shadow-sm backdrop-blur-sm transition-transform transition-shadow duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow dark:border-slate-800/70 dark:bg-slate-900/70 border-slate-200/80 bg-white/80 wire-surface-ticked">
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        {siteCopy.contact.openToText}
      </p>
      <div className="mt-6 space-y-4">
        <p className="border-t border-gray-100 pt-4 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
          {siteCopy.contact.resumePrompt}
        </p>
      </div>
    </div>
  );
}
