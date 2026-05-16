import { getClient } from "@/lib/apollo-client";
import { GET_POKEMON } from "@/graphql/queries/pokemonQueries";
import PokemonDetail from "@/components/pokemon/pokemon-detail/PokemonDetail";
import type { GetPokemonData, GetPokemonVars } from "@/types/pokemonType";

export default async function PokemonPage({
  params,
}: {
  readonly params: Promise<{ readonly name: string }>;
}) {
  const { name } = await params;

  const { data } = await getClient().query<GetPokemonData, GetPokemonVars>({
    query: GET_POKEMON,
    variables: { name },
  });

  if (!data) return <p>Something went wrong.</p>;
  if (!data.pokemon) return <p>Pokémon not found.</p>;

  return <PokemonDetail pokemon={data.pokemon} />;
}
