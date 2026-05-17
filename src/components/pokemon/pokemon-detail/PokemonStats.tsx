import type { Pokemon } from "@/types/pokemonType";

type Props = Pick<Pokemon, "maxHP" | "maxCP" | "fleeRate">;

export default function PokemonStats({
  maxHP,
  maxCP,
  fleeRate,
}: Readonly<Props>) {
  const stats = [
    {
      label: "Max HP",
      value: maxHP,
    },
    {
      label: "Max CP",
      value: maxCP,
    },
    {
      label: "Flee Rate",
      value: fleeRate,
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Stats</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>

            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
