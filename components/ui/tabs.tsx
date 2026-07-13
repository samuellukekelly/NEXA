"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
}: {
  tabs: Array<{ id: string; label: string; content: React.ReactNode }>;
}) {
  const [active, setActive] = useState(tabs[0]?.id);
  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto border-b border-white/10 pb-3" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-semibold transition duration-300",
              active === tab.id
                ? "border-nexa-cyan bg-nexa-cyan text-[#04101D]"
                : "border-white/10 bg-white/[0.035] text-nexa-silver hover:border-nexa-cyan/40",
            )}
            onClick={() => setActive(tab.id)}
            role="tab"
            aria-selected={active === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6" role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
}
