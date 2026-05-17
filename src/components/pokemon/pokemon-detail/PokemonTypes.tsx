import type { Pokemon } from "@/types/pokemonType";

type Props = Pick<Pokemon, "types">;

export default function PokemonTypes({ types }: Readonly<Props>) {
  return (
    <section>
      <div className="flex flex-wrap gap-2 py-2">
        {types.map((type) => (
          <span key={type} className="rounded-full border px-3 py-1 text-sm">
            {type}
          </span>
        ))}
      </div>
    </section>
  );
}
