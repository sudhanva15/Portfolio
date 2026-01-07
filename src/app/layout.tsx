import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { ThemeProvider } from "next-themes";
import SiteLayout from "@/components/layout/site-layout";
import ThemedBackground from "@/components/themed-background";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sudhanva Kashyap - Analytics Strategist",
  description:
    "Portfolio highlighting Sudhanva Kashyap's analytics, product strategy, and design-minded approach.",
  metadataBase: new URL("https://sudhanva-portfolio.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Minimal utility to join class names
  const cn = (...classes: Array<string | false | undefined | null>) => classes.filter(Boolean).join(" ");

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Use Next Script with beforeInteractive so this runs before hydration and first paint */}
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme'); if(t==='light') return; /* default dark */ document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
        }}
      />
      {/* Inline dark-mode fallback visuals (mirror .theme-space) so first paint matches the toggled background */}
      <style dangerouslySetInnerHTML={{ __html: `html.dark body{ background: radial-gradient(circle at 10% 0%, rgba(56, 189, 248, 0.22), transparent 60%), radial-gradient(circle at 90% 100%, rgba(147, 51, 234, 0.22), transparent 60%), #020617; color: #f8fafc; }
      html.dark body::before{ content: ""; position: fixed; inset: -80px; pointer-events: none; z-index: -1; background-image: radial-gradient(circle at 10% 20%, rgba(248,250,252,0.9) 1px, transparent 0), radial-gradient(circle at 80% 30%, rgba(148,163,184,0.85) 1px, transparent 0), radial-gradient(circle at 30% 80%, rgba(129,140,248,0.8) 1px, transparent 0), radial-gradient(circle at 60% 60%, rgba(236, 72, 153,0.7) 1px, transparent 0), radial-gradient(circle at 20% 90%, rgba(52,211,153,0.7) 1px, transparent 0); background-size: 220px 220px, 260px 260px, 300px 300px, 340px 340px, 380px 380px; opacity: 0.9; }
      html.dark body::after{ content: ""; position: fixed; inset: -20px; pointer-events: none; z-index: -1; background: radial-gradient(circle at center, transparent 0, rgba(0,0,0,0.4) 70%); }` }} />
      <body suppressHydrationWarning className={cn(inter.variable, "min-h-screen font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ThemedBackground>
            <SiteLayout>{children}</SiteLayout>
          </ThemedBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}

// ThemedBackground is a client component imported from src/components/themed-background
