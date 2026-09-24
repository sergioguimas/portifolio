"use client";

import { useEffect, useState } from "react";

const sectionIds = ["topo", "sobre", "solucoes", "skills", "projetos", "agora", "contato"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("topo");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    // A seção ativa é a última cujo topo já passou de 30% da altura da tela.
    // Proporção visível não funciona aqui: seções altas (como Projetos) nunca
    // chegam a um limiar mínimo e o menu ficava preso na seção anterior.
    const onScroll = () => {
      setScrolled(window.scrollY > 16);

      const marker = window.innerHeight * 0.3;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= marker).pop();
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;

      setActiveSection(atBottom ? sections[sections.length - 1].id : (current ?? sections[0]).id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { activeSection, scrolled };
}
