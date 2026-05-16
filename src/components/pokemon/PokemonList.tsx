"use client";

import { useQuery } from "@apollo/client/react";

import { GET_POKEMONS } from "@/graphql/queries/pokemonQueries";

import type { GetPokemonsData, GetPokemonsVars } from "@/types/pokemonType";

import PokemonCard from "./PokemonCards";
import PokemonPagination from "./PaginationPokemonList";

import { PAGE_SIZE } from "@/lib/pagination";

type Props = {
  currentPage: number;
};

export default function PokemonList({ currentPage }: Readonly<Props>) {
  const { data, loading, error } = useQuery<GetPokemonsData, GetPokemonsVars>(
    GET_POKEMONS,
    {
      variables: { first: 151 },
    },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data) return null;

  const sortedPokemons = [...data.pokemons].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const totalPages = Math.ceil(sortedPokemons.length / PAGE_SIZE);

  const pokemons = sortedPokemons.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <PokemonPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
