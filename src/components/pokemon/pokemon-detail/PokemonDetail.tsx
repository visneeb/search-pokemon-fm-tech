import Image from "next/image";

import type { Pokemon } from "@/types/pokemonType";

import PokemonAttackList from "./PokemonAttackList";
import EvolutionCard from "./PokemonEvolutionCard";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonMeasurements from "./PokemonMeasurements";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonDetail({ pokemon }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <section className="space-y-2">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={200}
          height={200}
        />

        <div>
          <h1 className="text-3xl font-bold">{pokemon.name}</h1>
          <PokemonTypes types={pokemon.types} />
        </div>
      </section>

      <PokemonStats
        maxHP={pokemon.maxHP}
        maxCP={pokemon.maxCP}
        fleeRate={pokemon.fleeRate}
      />
      <PokemonMeasurements weight={pokemon.weight} height={pokemon.height} />
      {/* Attacks */}
      {pokemon.attacks && (
        <section className="space-y-6">
          <PokemonAttackList
            title="Fast Attacks"
            attacks={pokemon.attacks.fast}
          />

          <PokemonAttackList
            title="Special Attacks"
            attacks={pokemon.attacks.special}
          />
        </section>
      )}

      {/* Evolutions */}
      {pokemon.evolutions?.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Evolutions</h2>

          <div className="flex flex-wrap gap-5">
            {pokemon.evolutions.map((evolution) => (
              <EvolutionCard key={evolution.id} evolution={evolution} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
