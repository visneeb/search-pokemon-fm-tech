"use client";

import { useMemo } from "react";

import { useQuery } from "@apollo/client/react";

import { GET_POKEMON_NAMES } from "@/graphql/queries/pokemonQueries";
import type { GetPokemonNamesData } from "@/types/pokemonType";

// Custom hook for Pokémon search suggestions
export function usePokemonSuggestions(input: string) {

  // Fetch Pokémon names from GraphQL
  const { data } = useQuery<GetPokemonNamesData>(GET_POKEMON_NAMES, {

    // Use cached data
    fetchPolicy: "cache-first",
  });

  // Generate filtered suggestions
  const suggestions = useMemo(() => {

    // Return empty array if input is empty
    // or Pokemon data is unavailable
    if (!input.trim() || !data?.pokemons) {
      return [];
    }

    // Convert input to lowercase for case-insensitive search
    const lower = input.toLowerCase();

    return data.pokemons

      // Match Pokemon names containing the input text
      .filter((pokemon) => pokemon.name.toLowerCase().includes(lower))

      // Limit suggestions to 5 items
      .slice(0, 5);

  }, [input, data]);

  // Return suggestion list
  return suggestions;
}