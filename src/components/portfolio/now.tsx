"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getProjectHref } from "@/data/projects";
import { nowItems, nowUpdatedAt, type NowItem } from "@/data/now";

function NowCardBody({ item }: { item: NowItem }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-300" />
          {item.phase}
        </span>
        {item.projectSlug && (
          <ArrowUpRight
            size={16}
            className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-cyan-700 dark:text-zinc-500 dark:group-hover:text-cyan-300"
          />
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
    </>
  );
}

const cardClassName =
  "group block h-full rounded-[1.5rem] border border-zinc-200 bg-white/65 p-6 backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5";

export function Now() {
  return (
    <section id="agora" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Agora
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              No que estou trabalhando.
            </h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Atualizado em {nowUpdatedAt}</p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {nowItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              {item.projectSlug ? (
                <Link
                  href={getProjectHref({ slug: item.projectSlug })}
                  className={`${cardClassName} hover:-translate-y-1 hover:border-cyan-400/30`}
                >
                  <NowCardBody item={item} />
                </Link>
              ) : (
                <div className={cardClassName}>
                  <NowCardBody item={item} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
