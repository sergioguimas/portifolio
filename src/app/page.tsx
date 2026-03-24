import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";
import { NeuralBackground } from "@/components/portfolio/neural-background";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f8fb] text-zinc-900 transition-colors dark:bg-[#050816] dark:text-zinc-100">
      <NeuralBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}