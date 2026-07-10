import { Card } from "@/components/ui/card";

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <Card className="text-center">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-nexa-muted">{text}</p>
    </Card>
  );
}
