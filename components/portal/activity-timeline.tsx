export function ActivityTimeline({ items }: { items: Array<{ id: string; date: string; text: string }> }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border-l border-nexa-cyan/30 pl-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-nexa-cyan">{item.date}</p>
          <p className="mt-1 text-sm text-nexa-silver">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
