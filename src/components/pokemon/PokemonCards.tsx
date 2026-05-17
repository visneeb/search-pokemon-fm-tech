import Link from "next/link";
import Image from "next/image";

import type { Pokemon } from "@/types/pokemonType";

type Props = {
  pokemon: Pick<Pokemon, "id" | "name" | "classification" | "image">;
};

export default function PokemonCard({ pokemon }: Readonly<Props>) {
  return (
    <Link
      href={`/pokemon/${pokemon.name}`}
      className="block h-full rounded-xl border p-4 transition-shadow hover:shadow-md"
    >
      <div className="flex flex-col md:flex-row h-full items-center gap-6">
        <div className="relative flex  h-32 w-32 shrink-0 items-center justify-center">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="160px"
            priority
            className="object-contain"
          />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold">{pokemon.name}</h2>

          <p className="text-sm text-muted-foreground">
            {pokemon.classification}
          </p>
        </div>
      </div>
    </Link>
  );
}
