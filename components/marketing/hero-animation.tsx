"use client";

import { motion, type Transition, useReducedMotion } from "framer-motion";

const pathTransition: Transition = {
  duration: 2.6,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

export function HeroAnimation() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-nexa-light-cyan/20 bg-white/[0.045] p-4 shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(96,230,237,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(96,230,237,.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70" />
      <svg viewBox="0 0 780 520" className="relative z-10 h-full min-h-[390px] w-full" role="img" aria-label="Animated electrical distribution network in an abstract building">
        <g fill="none" stroke="rgba(229,231,235,.25)" strokeWidth="1.4">
          <path d="M145 404V170L356 66l268 142v196z" />
          <path d="M356 66v338M145 170l211 122 268-84M145 246l211 98 268-64M145 324l211 80 268-42" />
          <path d="M205 202v202M264 236v168M318 270v134M420 102v302M486 138v266M548 172v232" />
        </g>
        <g fill="rgba(96,230,237,.08)" stroke="rgba(96,230,237,.25)">
          <path d="M208 248l96 46v46l-96-38z" />
          <path d="M424 178l146 78v48l-146-62z" />
          <path d="M424 320l146 34v42l-146-18z" />
        </g>
        <g fill="none" strokeLinecap="round" strokeWidth="4">
          {[
            "M44 454C122 446 164 414 230 404s110 26 170-10 114-70 218-54",
            "M96 414C178 398 224 354 306 350s142 36 210-8 94-92 198-98",
            "M120 486c104-36 152-48 238-36s126 42 206 0 96-44 166-46",
            "M356 404V122",
            "M548 404V188",
          ].map((d) => (
            <motion.path
              key={d}
              d={d}
              stroke="#00C7D4"
              strokeDasharray="80 520"
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -600] }}
              transition={pathTransition}
            />
          ))}
        </g>
        <g>
          {[
            [356, 122, "Main switchboard"],
            [548, 188, "Critical power"],
            [230, 404, "Incoming supply"],
            [620, 340, "Lighting"],
          ].map(([x, y, label]) => (
            <g key={String(label)}>
              <motion.circle
                cx={Number(x)}
                cy={Number(y)}
                r="17"
                fill="#04101D"
                stroke="#60E6ED"
                animate={reduceMotion ? undefined : { scale: [1, 1.12, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
              <text x={Number(x) + 26} y={Number(y) + 5} fill="#E5E7EB" fontSize="13" fontWeight="700">
                {label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
