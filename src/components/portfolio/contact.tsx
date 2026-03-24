"use client";

import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    description: "Projetos, código e experimentos",
    icon: Github,
    href: "https://github.com/sergioguimas",
  },
  {
    name: "LinkedIn",
    description: "Experiência e networking profissional",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sergio-guimarães-ads/",
  },
  {
    name: "Instagram",
    description: "Conteúdo e presença digital",
    icon: Instagram,
    href: "https://www.instagram.com/sergiojunio.guimas/",
  },
  {
    name: "WhatsApp",
    description: "Contato direto e rápido",
    icon: MessageCircle,
    href: "https://wa.me/5533999791305",
  },
  {
    name: "Email",
    description: "Contato formal",
    icon: Mail,
    href: "mailto:guimaraes.sja@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            Contato
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Vamos construir algo juntos
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Se você tem uma ideia, projeto ou precisa automatizar algum processo,
            podemos conversar. Estou sempre aberto a novas oportunidades e desafios.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white/70 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.30)]"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 transition group-hover:scale-105 dark:text-cyan-300">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-zinc-950 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex text-sm font-medium text-cyan-700 transition group-hover:translate-x-1 dark:text-cyan-300">
                    Acessar →
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}