import type { ReactNode, CSSProperties } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    // set a CSS variable for the header height so we can avoid layout shift
    <div className="flex min-h-screen flex-col" style={{ ['--site-header-height' as string]: '64px' } as CSSProperties }>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1" style={{ paddingTop: 'var(--site-header-height)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
