"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField, Input } from "@/components/ui/form-field";

export function VoltageDropCalculator() {
  const [phase, setPhase] = useState<"single" | "three">("single");
  const [current, setCurrent] = useState("32");
  const [length, setLength] = useState("40");
  const [mv, setMv] = useState("4.4");
  const [voltage, setVoltage] = useState("230");

  const result = useMemo(() => {
    const amps = Number(current);
    const metres = Number(length);
    const mvValue = Number(mv);
    const nominal = Number(voltage);
    if ([amps, metres, mvValue, nominal].some((value) => !Number.isFinite(value) || value <= 0)) return null;
    const multiplier = phase === "three" ? Math.sqrt(3) / 2 : 1;
    const drop = (mvValue * amps * metres * multiplier) / 1000;
    return { drop, percent: (drop / nominal) * 100 };
  }, [current, length, mv, phase, voltage]);

  return (
    <Card className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
      <div className="grid gap-4">
        <div className="flex gap-2">
          <Button type="button" variant={phase === "single" ? "primary" : "secondary"} onClick={() => setPhase("single")}>
            Single-phase
          </Button>
          <Button type="button" variant={phase === "three" ? "primary" : "secondary"} onClick={() => setPhase("three")}>
            Three-phase
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField label="Design current (A)">
            <Input inputMode="decimal" value={current} onChange={(event) => setCurrent(event.target.value)} />
          </FormField>
          <FormField label="Cable length (m)">
            <Input inputMode="decimal" value={length} onChange={(event) => setLength(event.target.value)} />
          </FormField>
          <FormField label="Voltage-drop value (mV/A/m)">
            <Input inputMode="decimal" value={mv} onChange={(event) => setMv(event.target.value)} />
          </FormField>
          <FormField label="Nominal voltage (V)">
            <Input inputMode="decimal" value={voltage} onChange={(event) => setVoltage(event.target.value)} />
          </FormField>
        </div>
      </div>
      <div className="rounded-lg border border-nexa-cyan/20 bg-nexa-cyan/10 p-6">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-nexa-light-cyan">Indicative result</p>
        {result ? (
          <>
            <p className="mt-4 text-5xl font-black text-white">{result.drop.toFixed(2)} V</p>
            <p className="mt-2 text-xl font-bold text-nexa-silver">{result.percent.toFixed(2)}% voltage drop</p>
          </>
        ) : (
          <p className="mt-4 text-nexa-silver">Enter positive numeric values to calculate an indicative result.</p>
        )}
        <p className="mt-6 text-sm leading-6 text-nexa-muted">
          Indicative only. Final cable selection requires full design verification, installation method checks, correction
          factors, protective device coordination and project-specific review.
        </p>
      </div>
    </Card>
  );
}
