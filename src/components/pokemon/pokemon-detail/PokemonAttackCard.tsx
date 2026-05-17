import type { Attack } from "@/types/pokemonType";

type Props = {
  attack: Attack;
};

export default function PokemonAttackCard({ attack }: Readonly<Props>) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">
      <div className="space-y-1">
        <p className="font-medium">{attack.name}</p>

        <span className="text-sm text-muted-foreground">{attack.type}</span>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold">{attack.damage}</p>

        <span className="text-xs text-muted-foreground">DMG</span>
      </div>
    </div>
  );
}
