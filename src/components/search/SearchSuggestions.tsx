import type { PokemonSuggestion } from "@/types/pokemonType";

// Component props
type Props = {
  suggestions: PokemonSuggestion[];

  // Callback when user selects a suggestion
  onSelect: (name: string) => void;
};

// Display Pokemon search suggestions dropdown
export function SearchSuggestions({ suggestions, onSelect }: Readonly<Props>) {

  // Hide component if no suggestions exist
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="absolute z-10 w-full top-20 rounded-md border bg-white shadow-md">

      {/* Render suggestion list */}
      {suggestions.map((pokemon) => (
        <li key={pokemon.id}>

          <button
            type="button"

            // Select Pokemon name when clicked
            onMouseDown={() => onSelect(pokemon.name)}

            className="w-full cursor-pointer px-3 py-2 text-left hover:bg-gray-100"
          >

            {/* Display Pokemon name */}
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
}