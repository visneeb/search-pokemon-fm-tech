import PokemonList from "@/components/pokemon/PokemonList";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;

  return <PokemonList currentPage={Number(params.page) || 1} />;
}
