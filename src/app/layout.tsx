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
