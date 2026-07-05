import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Sérgio Guimarães | Sistemas web, SaaS e automação",
    template: "%s | Sérgio Guimarães",
  },
  description:
    "Portfólio de Sérgio Guimarães: desenvolvimento web, SaaS, automações, integrações e produtos digitais orientados a problemas reais de negócio.",
  applicationName: "Portfólio de Sérgio Guimarães",
  authors: [{ name: "Sérgio Guimarães" }],
  creator: "Sérgio Guimarães",
  publisher: "Sérgio Guimarães",
  category: "technology",
  keywords: [
    "Sérgio Guimarães",
    "desenvolvedor full stack",
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "SaaS",
    "automação de processos",
    "integração de APIs",
    "n8n",
  ],
  openGraph: {
    title: "Sérgio Guimarães | Sistemas web, SaaS e automação",
    description:
      "Cases de sistemas web, automações e produtos digitais construídos para resolver problemas reais de negócio.",
    siteName: "Portfólio de Sérgio Guimarães",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sérgio Guimarães | Sistemas web, SaaS e automação",
    description:
      "Cases de sistemas web, automações e produtos digitais orientados a problemas reais.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white text-zinc-900 antialiased dark:bg-[#050816] dark:text-zinc-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
