import type { Attack } from "@/types/pokemonType";

import PokemonAttackCard from "./PokemonAttackCard";

type Props = {
  title: string;
  attacks: Attack[];
};

export default function PokemonAttackList({ title, attacks }: Readonly<Props>) {
  if (!attacks.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-sm text-muted-foreground">
          {attacks.length} attacks
        </p>
      </div>

      <div className="grid gap-3">
        {attacks.map((attack) => (
          <PokemonAttackCard
            key={`${attack.name}-${attack.type}`}
            attack={attack}
          />
        ))}
      </div>
    </section>
  );
}
