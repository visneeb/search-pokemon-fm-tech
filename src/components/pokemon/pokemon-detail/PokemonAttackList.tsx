import type { Attack } from "@/types/pokemonType";

import PokemonAttackCard from "./PokemonAttackCard";

type Props = {
  title: string;
  attacks: Attack[];
};

export default function PokemonAttackList({ title, attacks }: Readonly<Props>) {
  const validAttacks = attacks.filter(
    (attack) => attack.name && attack.type && attack.damage !== null,
  );

  if (!validAttacks.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>

        <p className="text-sm text-muted-foreground">
          {validAttacks.length} attacks
        </p>
      </div>

      <div className="grid gap-3">
        {validAttacks.map((attack) => (
          <PokemonAttackCard
            key={`${attack.name}-${attack.type}-${attack.damage}`}
            attack={attack}
          />
        ))}
      </div>
    </section>
  );
}
