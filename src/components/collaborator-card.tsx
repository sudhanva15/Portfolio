import Image from "next/image";
import Link from "next/link";

export type CollaboratorCardProps = {
  name: string;
  program: string;
  additionalInfo?: string;
  linkedinUrl: string;
  imageSrc: string;
  photoCredit?: string;
};

export default function CollaboratorCard({
  name,
  program,
  additionalInfo,
  linkedinUrl,
  imageSrc,
  photoCredit,
}: CollaboratorCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 ease-out dark:border-gray-800 dark:bg-gray-900 sm:p-5 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md">
      {/* Avatar */}
      <div className="relative mb-3 h-16 w-16 overflow-hidden rounded-full sm:h-18 sm:w-18">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 64px, 72px"
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Name */}
      <h3 className="text-center text-sm font-semibold text-gray-900 dark:text-gray-50">
        {name}
      </h3>

      {/* Program / Degree */}
      <p className="mt-1 text-center text-xs text-gray-600 dark:text-gray-400">
        {program}
      </p>

      {/* Additional info (e.g., BTech) */}
      {additionalInfo && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-500">
          {additionalInfo}
        </p>
      )}

      {/* LinkedIn Icon */}
      <Link
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn profile for ${name}`}
        className="mt-3 inline-flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 p-2 text-gray-700 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
      >
        {/* LinkedIn "in" Icon SVG */}
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Link>

      {/* Photo Credit */}
      {photoCredit && (
        <p className="mt-2 text-center text-[10px] text-gray-400 dark:text-gray-600">
          {photoCredit}
        </p>
      )}
    </div>
  );
}
