import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import SiteLayout from "@/components/layout/site-layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sudhanva Kashyap — Analytics Strategist",
  description:
    "Portfolio highlighting Sudhanva Kashyap's analytics, product strategy, and design-minded approach.",
  metadataBase: new URL("https://sudhanva-portfolio.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-50`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
