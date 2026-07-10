import type { InputHTMLAttributes, ReactNode } from "react";

export function FormField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm font-bold text-nexa-silver">
      <span>{label}</span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="min-h-11 w-full rounded-md border border-white/10 bg-white/[0.055] px-3 text-white placeholder:text-nexa-muted focus:border-nexa-cyan"
    />
  );
}
