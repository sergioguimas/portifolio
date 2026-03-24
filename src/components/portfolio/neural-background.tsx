"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "8%", y: "16%", size: 8 },
  { x: "20%", y: "30%", size: 6 },
  { x: "34%", y: "12%", size: 10 },
  { x: "46%", y: "28%", size: 7 },
  { x: "62%", y: "18%", size: 9 },
  { x: "76%", y: "34%", size: 6 },
  { x: "88%", y: "20%", size: 8 },
  { x: "15%", y: "58%", size: 9 },
  { x: "29%", y: "72%", size: 7 },
  { x: "44%", y: "58%", size: 10 },
  { x: "58%", y: "74%", size: 6 },
  { x: "73%", y: "62%", size: 8 },
  { x: "86%", y: "78%", size: 9 },
];

const lines = [
  { x1: "8%", y1: "16%", x2: "20%", y2: "30%" },
  { x1: "20%", y1: "30%", x2: "34%", y2: "12%" },
  { x1: "34%", y1: "12%", x2: "46%", y2: "28%" },
  { x1: "46%", y1: "28%", x2: "62%", y2: "18%" },
  { x1: "62%", y1: "18%", x2: "76%", y2: "34%" },
  { x1: "76%", y1: "34%", x2: "88%", y2: "20%" },
  { x1: "20%", y1: "30%", x2: "15%", y2: "58%" },
  { x1: "15%", y1: "58%", x2: "29%", y2: "72%" },
  { x1: "29%", y1: "72%", x2: "44%", y2: "58%" },
  { x1: "44%", y1: "58%", x2: "58%", y2: "74%" },
  { x1: "58%", y1: "74%", x2: "73%", y2: "62%" },
  { x1: "73%", y1: "62%", x2: "86%", y2: "78%" },
  { x1: "46%", y1: "28%", x2: "44%", y2: "58%" },
  { x1: "62%", y1: "18%", x2: "73%", y2: "62%" },
];

export function NeuralBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.10),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.14),transparent_28%)]" />

      <div className="absolute inset-0 opacity-40 dark:opacity-100">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {lines.map((line, index) => (
            <motion.line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="currentColor"
              strokeWidth="0.12"
              className="text-zinc-300/70 dark:text-cyan-300/20"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.12, 0.28, 0.12] }}
              transition={{
                duration: 4 + index % 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {nodes.map((node, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full border border-cyan-400/30 bg-cyan-300/20 shadow-[0_0_25px_rgba(34,211,238,0.18)] dark:border-cyan-300/30 dark:bg-cyan-300/25"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
          }}
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.35, 0.9, 0.35],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04),transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.03),transparent)]" />
      <div className="absolute inset-0 bg-[size:42px_42px] opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] text-zinc-700 dark:text-white" />
    </div>
  );
}