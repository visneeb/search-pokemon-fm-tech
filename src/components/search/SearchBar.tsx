"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { SearchSuggestions } from "./SearchSuggestions";

import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";
import { useSearchBar } from "@/hooks/useSearchBar";

import { normalizePokemonName } from "@/utils/normalizePokemonName";

// Search bar component for Pokémon search/navigation
export function SearchBar() {

  // Next.js navigation hooks
  const router = useRouter();
  const pathname = usePathname();

  // Search bar state and handlers
  const {
    inputValue,
    setInputValue,
    showSuggestions,
    setShowSuggestions,
    hideSuggestions,
    selectSuggestion,
  } = useSearchBar();

  // Get filtered Pokemon suggestions
  const suggestions = usePokemonSuggestions(inputValue);

  // Sync input value with current Pokemon route
  useEffect(() => {
    const match = pathname.match(/^\/pokemon\/(.+)$/);

    if (!match) {
      return;
    }

    // Decode URL and update input field
    setInputValue(decodeURIComponent(match[1]));
  }, [pathname, setInputValue]);

  // Navigate to Pokemon detail page
  const navigateToPokemon = (name: string) => {

    // Normalize search text for URL
    const normalizedName = normalizePokemonName(name);

    if (!normalizedName) {
      return;
    }

    // Navigate to Pokemon page
    router.push(`/pokemon/${encodeURIComponent(normalizedName)}`);

    // Hide suggestions after navigation
    setShowSuggestions(false);
  };

  // Handle search button / Enter key
  const handleSearch = () => {
    navigateToPokemon(inputValue);
  };

  return (
    <div className="relative w-full max-w-md">
      <Field>

        {/* Search label */}
        <FieldLabel htmlFor="pokemon-search">
          Search Pokemon
        </FieldLabel>

        <ButtonGroup>
          <div className="relative flex-1">

            {/* Search input */}
            <Input
              id="pokemon-search"
              value={inputValue}
              placeholder="Pokemon name..."
              className="rounded-r-none pr-8"

              // Update input and show suggestions
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}

              // Show suggestions on focus
              onFocus={() => setShowSuggestions(true)}

              // Hide suggestions on blur
              onBlur={hideSuggestions}

              // Search on Enter key
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            {/* Clear input button */}
            {inputValue && (
              <button
                type="button"
                aria-label="Clear search"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"

                // Prevent blur before clearing input
                onMouseDown={(e) => {
                  e.preventDefault();

                  setInputValue("");
                  setShowSuggestions(false);
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Search button */}
          <Button onClick={handleSearch}>
            Search
          </Button>
        </ButtonGroup>

        {/* Suggestion dropdown */}
        {showSuggestions && (
          <SearchSuggestions
            suggestions={suggestions}

            // Select suggestion and navigate
            onSelect={(name) => {
              selectSuggestion(name);
              navigateToPokemon(name);
            }}
          />
        )}
      </Field>
    </div>
  );
}