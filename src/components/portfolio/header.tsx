"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hook/use-active-section";

const navItems = [
  { label: "Início", href: "#topo", id: "topo" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Contato", href: "#contato", id: "contato" },
];

export function Header() {
  const { activeSection, scrolled } = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div
            className={[
              "relative flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5",
              scrolled
                ? "border-zinc-200/80 bg-white/78 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#07101f]/78 dark:shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
                : "border-zinc-200/60 bg-white/52 dark:border-white/10 dark:bg-white/[0.04]",
            ].join(" ")}
          >
            <a
              href="#topo"
              className="relative z-10 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-900 dark:text-zinc-100"
            >
              Sergio.dev
            </a>

            <nav className="relative hidden items-center gap-2 md:flex">
              <div className="relative flex items-center rounded-full border border-zinc-200/80 bg-white/65 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      className={[
                        "relative z-10 rounded-full px-4 py-2 text-sm transition-colors duration-300",
                        isActive
                          ? "text-zinc-950 dark:text-white"
                          : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
                      ].join(" ")}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="header-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-zinc-950/[0.06] dark:bg-white/[0.08]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="relative z-10 flex items-center gap-2">
              <a
                href="#contato"
                className="hidden rounded-full border border-zinc-300/90 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:-translate-y-[1px] hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-white/15 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950 sm:inline-flex"
              >
                Vamos conversar
              </a>

              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-800 backdrop-blur-xl transition hover:scale-105 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 md:hidden"
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            <motion.div
              animate={{
                opacity: scrolled ? 1 : 0,
                scaleX: scrolled ? 1 : 0.85,
              }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute inset-x-8 bottom-0 h-px origin-center bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
            />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="absolute left-4 right-4 top-[84px] rounded-[1.75rem] border border-zinc-200 bg-white/92 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#07101f]/92 dark:shadow-[0_20px_60px_rgba(0,0,0,0.32)]"
            >
              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ delay: index * 0.04 }}
                      className={[
                        "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition",
                        isActive
                          ? "border-cyan-400/25 bg-cyan-400/10 text-zinc-950 dark:text-white"
                          : "border-zinc-200/80 bg-white/60 text-zinc-600 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300 dark:hover:text-white",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex justify-center rounded-2xl bg-zinc-950 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-zinc-950"
              >
                Vamos conversar
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}