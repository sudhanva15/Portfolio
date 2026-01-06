import SocialIcon from "@/components/social-icon";
import { siteCopy } from "@/content/siteCopy";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">{siteCopy.footer.builtLine}</p>
          <p className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">
            {siteCopy.footer.tagline}
          </p>
        </div>
        <div className="flex items-center gap-2">
            <SocialIcon icon="linkedin" href={siteCopy.contact.linkedinUrl} label={siteCopy.footer.linkedinLabel} />
        </div>
      </div>
    </footer>
  );
}
