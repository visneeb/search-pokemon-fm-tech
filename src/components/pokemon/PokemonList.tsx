"use client";

import { useMemo } from "react";
import { useQuery } from "@apollo/client/react";

import { GET_POKEMONS } from "@/graphql/queries/pokemonQueries";

import type { GetPokemonsData, GetPokemonsVars } from "@/types/pokemonType";

import PokemonCard from "./PokemonCards";
import PokemonPagination from "./PaginationPokemonList";

import { PAGE_SIZE } from "@/lib/pagination";

type Props = {
  currentPage: number;
};

// Display paginated Pokémon list
export default function PokemonList({ currentPage }: Readonly<Props>) {
  // Fetch Pokemon data from GraphQL
  const { data, loading, error } = useQuery<GetPokemonsData, GetPokemonsVars>(
    GET_POKEMONS,
    {
      variables: { first: 151 },
    },
  );

  // Sort Pokemon alphabetically
  const sortedPokemons = useMemo(() => {
    const pokemons = data?.pokemons ?? [];

    return [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
  }, [data?.pokemons]);

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (error) {
    return <p>{error.message}</p>;
  }

  // Calculate total pages
  const totalPages = Math.ceil(sortedPokemons.length / PAGE_SIZE);

  // Get Pokemon for current page
  const pokemons = sortedPokemons.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Pokemon grid */}
      <div className="grid grid-cols-2 gap-4">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Pagination controls */}
      <PokemonPagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
