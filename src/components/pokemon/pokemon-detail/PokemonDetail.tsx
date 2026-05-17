import Image from "next/image";

import type { Pokemon } from "@/types/pokemonType";

import PokemonAttackList from "./PokemonAttackList";
import EvolutionCard from "./PokemonEvolutionCard";
import PokemonTypes from "./PokemonTypes";
import PokemonStats from "./PokemonStats";
import PokemonMeasurements from "./PokemonMeasurements";
import PokemonResistanceList from "./PokemonResistanceList";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonDetail({ pokemon }: Readonly<Props>) {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <section className="space-y-4 border-b pb-5">
        <div className="relative flex h-40 w-40 shrink-0 items-center justify-center">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{pokemon.name}</h1>
          <p className="text-sm text-muted-foreground">
            {pokemon.classification}
          </p>
          <PokemonTypes types={pokemon.types} />
        </div>
      </section>

      <div className="flex  py-4 ">
        <PokemonResistanceList
          title="Resistant"
          values={pokemon.resistant}
          className="border-r-2 pr-6"
        />

        <PokemonResistanceList
          title="Weaknesses"
          values={pokemon.weaknesses}
          className="pl-6"
        />
      </div>
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
