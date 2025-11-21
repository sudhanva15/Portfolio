import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 sm:px-6 lg:px-0 md:flex-row md:items-center md:justify-between">
        <p className="font-medium text-gray-900 dark:text-gray-100">Built with intention in Rochester, NY.</p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="mailto:sudhanva.kashyap@simon.rochester.edu" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Email
          </Link>
          <Link href="https://www.linkedin.com/in/sudhanvakashyap" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            LinkedIn
          </Link>
          <Link href="/resume.pdf" className="transition hover:text-blue-600 dark:hover:text-blue-400">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
