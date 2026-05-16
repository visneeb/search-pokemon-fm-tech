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
      className="block rounded-lg border p-4 transition-shadow hover:shadow-md"
    >
      <Image src={pokemon.image} alt={pokemon.name} width={150} height={150} />

      <h2>{pokemon.name}</h2>
      <p>{pokemon.classification}</p>
    </Link>
  );
}
