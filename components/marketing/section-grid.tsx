import { Card } from "@/components/ui/card";

export function SectionGrid({ items }: { items: Array<{ title: string; text: string; meta?: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="transition hover:border-nexa-cyan/40 hover:bg-white/[0.055]">
          {item.meta ? <p className="text-xs font-black uppercase tracking-[0.18em] text-nexa-cyan">{item.meta}</p> : null}
          <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-nexa-muted">{item.text}</p>
        </Card>
      ))}
    </div>
  );
}
