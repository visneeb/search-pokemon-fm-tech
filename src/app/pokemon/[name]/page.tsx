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

export const revalidate = 86400;

export const dynamicParams = true;

const client = makeClient();

export async function generateStaticParams() {
  const { data } = await client.query<GetPokemonNamesData>({
    query: GET_POKEMON_NAMES,
  });

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

export default async function PokemonPage({ params }: Readonly<Props>) {
  const { name } = await params;

  const { data } = await client.query<GetPokemonData, GetPokemonVars>({
    query: GET_POKEMON,

    variables: {
      name,
    },

    context: {
      fetchOptions: {
        next: {
          revalidate,
        },
      },
    },
  });

  const pokemon = data?.pokemon;

  if (!pokemon) {
    notFound();
  }

  return <PokemonDetail pokemon={pokemon} />;
}
