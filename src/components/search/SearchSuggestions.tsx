import type { PokemonSuggestion } from "@/types/pokemonType";

type Props = {
  suggestions: PokemonSuggestion[];
  onSelect: (name: string) => void;
};

export function SearchSuggestions({ suggestions, onSelect }: Readonly<Props>) {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="absolute z-10 w-full top-20 rounded-md border bg-white shadow-md">
      {suggestions.map((pokemon) => (
        <li key={pokemon.id} className="">
          <button
            type="button"
            onMouseDown={() => onSelect(pokemon.name)}
            className="w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100"
          >
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
