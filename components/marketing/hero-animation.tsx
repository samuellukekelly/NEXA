"use client";

import { motion, type Transition, useReducedMotion } from "framer-motion";

const drawTransition: Transition = {
  duration: 2.2,
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 0.35,
  ease: "easeInOut",
};

const pulseTransition: Transition = {
  duration: 2.4,
  repeat: Infinity,
  ease: "easeInOut",
};

const circuitRoutes = [
  "M188 344H316V246H452V188H610",
  "M188 372H364V306H520V246H644",
  "M248 404H412V354H574",
];

const drawingLines = [
  "M164 134H612V410H164Z",
  "M210 178H342V274H210Z",
  "M422 174H564V268H422Z",
  "M236 334H360V390H236Z",
  "M450 332H592V392H450Z",
];

export function HeroAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-nexa-light-cyan/30 bg-white/75 p-4 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl dark:border-nexa-light-cyan/20 dark:bg-white/[0.045] dark:shadow-black/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,199,212,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,199,212,.12)_1px,transparent_1px)] bg-[size:38px_38px] dark:bg-[linear-gradient(rgba(96,230,237,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,230,237,.08)_1px,transparent_1px)]" />
      <div className="absolute left-4 right-4 top-4 z-10 flex h-10 items-center justify-between rounded-md border border-nexa-cyan/20 bg-white/80 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-nexa-muted shadow-sm dark:bg-nexa-deep/80">
        <span>CAD model space</span>
        <span className="text-nexa-cyan">Electrical design live</span>
      </div>

      <svg
        viewBox="0 0 780 520"
        className="relative z-10 h-full min-h-[390px] w-full"
        role="img"
        aria-label="Animated CAD electrical engineering design being drawn on screen"
      >
        <g transform="translate(32 74)">
          <rect width="716" height="392" rx="12" fill="rgba(255,255,255,.55)" stroke="rgba(0,199,212,.22)" />
          <rect x="0" y="0" width="92" height="392" rx="12" fill="rgba(0,199,212,.08)" />
          <rect x="18" y="28" width="56" height="10" rx="3" fill="#00C7D4" opacity=".9" />
          {["LV-01", "LGT", "FIRE", "DATA", "PWR"].map((label, index) => (
            <g key={label} transform={`translate(18 ${72 + index * 42})`}>
              <rect width="54" height="26" rx="4" fill="rgba(8,19,32,.06)" stroke="rgba(0,199,212,.28)" />
              <text x="9" y="17" fill="var(--nexa-muted)" fontSize="9" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </g>

        <g fill="none" stroke="rgba(0,199,212,.16)" strokeWidth="1">
          {Array.from({ length: 11 }).map((_, index) => (
            <path key={`v-${index}`} d={`M${124 + index * 52} 90V466`} />
          ))}
          {Array.from({ length: 8 }).map((_, index) => (
            <path key={`h-${index}`} d={`M124 ${110 + index * 48}H716`} />
          ))}
        </g>

        <g fill="none" stroke="rgba(8,19,32,.42)" strokeWidth="1.4" className="dark:stroke-[rgba(229,231,235,.28)]">
          {drawingLines.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              initial={false}
              animate={reduceMotion ? undefined : { pathLength: [0, 1, 1], opacity: [0.35, 0.85, 0.85] }}
              transition={reduceMotion ? undefined : { ...drawTransition, delay: index * 0.18 }}
            />
          ))}
          <path d="M164 218H612M164 294H612M386 134V410" strokeDasharray="6 10" />
        </g>

        <g fill="rgba(0,199,212,.08)" stroke="rgba(0,199,212,.34)">
          <rect x="210" y="178" width="132" height="96" />
          <rect x="422" y="174" width="142" height="94" />
          <rect x="236" y="334" width="124" height="56" />
          <rect x="450" y="332" width="142" height="60" />
        </g>

        <g fill="none" stroke="#00C7D4" strokeLinecap="round" strokeWidth="4">
          {circuitRoutes.map((d, index) => (
            <motion.path
              key={d}
              d={d}
              strokeDasharray="72 520"
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -590] }}
              transition={reduceMotion ? undefined : { ...drawTransition, delay: index * 0.22 }}
            />
          ))}
        </g>

        <g>
          {[
            [188, 344, "DB-A"],
            [610, 188, "Critical power"],
            [644, 246, "Lighting"],
            [574, 354, "Fire alarm"],
          ].map(([x, y, label], index) => (
            <g key={String(label)}>
              <motion.circle
                cx={Number(x)}
                cy={Number(y)}
                r="15"
                fill="var(--background)"
                stroke="#00C7D4"
                animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
                transition={reduceMotion ? undefined : { ...pulseTransition, delay: index * 0.24 }}
              />
              <text x={Number(x) + 24} y={Number(y) + 5} fill="var(--nexa-white)" fontSize="12" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </g>

        <g transform="translate(494 92)">
          <rect width="178" height="58" rx="8" fill="rgba(255,255,255,.75)" stroke="rgba(0,199,212,.28)" className="dark:fill-[rgba(4,16,29,.82)]" />
          <text x="14" y="22" fill="#00A8B4" fontSize="11" fontWeight="700">
            CABLE SCHEDULE
          </text>
          <text x="14" y="42" fill="var(--nexa-muted)" fontSize="10">
            4C 25mm SWA  |  63A  |  18m
          </text>
        </g>

        <motion.g
          animate={reduceMotion ? undefined : { x: [0, 118, 246, 392, 392], y: [0, 70, 112, 72, 184] }}
          transition={reduceMotion ? undefined : { duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(164 134)"
        >
          <path d="M0 0L18 42L27 24L48 22Z" fill="#081320" stroke="#00C7D4" strokeWidth="2" className="dark:fill-white" />
          <circle cx="50" cy="22" r="5" fill="#00C7D4" />
        </motion.g>

        <motion.g
          animate={reduceMotion ? undefined : { opacity: [0, 1, 1, 0], y: [8, 0, 0, -8] }}
          transition={reduceMotion ? undefined : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          transform="translate(254 96)"
        >
          <rect width="160" height="34" rx="7" fill="#00C7D4" />
          <text x="14" y="22" fill="#04101D" fontSize="12" fontWeight="700">
            placing containment route
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
