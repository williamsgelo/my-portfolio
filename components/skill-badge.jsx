import { Card, CardContent } from "@/components/ui/card";

export function SkillBadge({ name }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 transition-all hover:border-rose-500/50 hover:shadow-md hover:shadow-rose-500/10">
      <CardContent className="p-4 flex justify-center">
        <span className="font-medium text-zinc-300">{name}</span>
      </CardContent>
    </Card>
  );
}
