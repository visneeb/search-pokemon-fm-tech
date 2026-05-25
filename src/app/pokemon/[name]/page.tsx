import { notFound } from "next/navigation";

import PokemonDetail from "@/components/pokemon/pokemon-detail/PokemonDetail";

import {
  GET_POKEMON,
  GET_POKEMON_NAMES,
} from "@/graphql/queries/pokemonQueries";

import { makeClient } from "@/lib/make-client";

import type {
  GetPokemonData,
  GetPokemonNamesData,
  GetPokemonVars,
} from "@/types/pokemonType";

// Revalidate cached page every 24 hours
export const revalidate = 86400;

// Allow dynamic routes not generated at build time
export const dynamicParams = true;

// Create Apollo client instance
const client = makeClient();

// Generate static Pokémon routes at build time
export async function generateStaticParams() {
  // Fetch Pokémon names
  const { data } = await client.query<GetPokemonNamesData>({
    query: GET_POKEMON_NAMES,
  });

  // Generate route params
  return (
    data?.pokemons.map((pokemon) => ({
      name: pokemon.name.toLowerCase(),
    })) ?? []
  );
}

type Props = {
  params: Promise<{
    name: string;
  }>;
};

// Pokémon detail page
export default async function PokemonPage({ params }: Readonly<Props>) {
  // Get route parameter
  const { name } = await params;

  // Fetch Pokémon detail
  const { data } = await client.query<GetPokemonData, GetPokemonVars>({
    query: GET_POKEMON,

    variables: {
      name,
    },

    // Enable Next.js cache revalidation
    context: {
      fetchOptions: {
        next: {
          revalidate,
        },
      },
    },
  });

  const pokemon = data?.pokemon;

  // Show 404 page if Pokémon not found
  if (!pokemon) {
    notFound();
  }

  // Render Pokémon detail component
  return <PokemonDetail pokemon={pokemon} />;
}
