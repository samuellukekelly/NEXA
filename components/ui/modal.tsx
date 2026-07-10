"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/card";

export function Modal({ trigger, title, children }: { trigger: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="button" variant="secondary" onClick={() => setOpen(true)}>
        {trigger}
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-5" role="dialog" aria-modal="true">
          <GlassPanel className="max-w-xl p-6">
            <div className="flex items-start justify-between gap-6">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <button type="button" className="text-nexa-muted hover:text-white" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="mt-4 text-nexa-silver">{children}</div>
          </GlassPanel>
        </div>
      ) : null}
    </>
  );
}
