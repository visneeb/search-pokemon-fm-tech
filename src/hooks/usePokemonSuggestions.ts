"use client";

import { useMemo } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_POKEMON_NAMES } from "@/graphql/queries/pokemonQueries";
import type { GetPokemonNamesData } from "@/types/pokemonType";

export function usePokemonSuggestions(input: string) {
  const { data } = useQuery<GetPokemonNamesData>(GET_POKEMON_NAMES, {
    fetchPolicy: "cache-first",
  });

  const suggestions = useMemo(() => {
    if (!input.trim() || !data?.pokemons) {
      return [];
    }

    const lower = input.toLowerCase();

    return data.pokemons
      .filter((pokemon) => pokemon.name.toLowerCase().includes(lower))
      .slice(0, 5);
  }, [input, data]);

  return suggestions;
}
