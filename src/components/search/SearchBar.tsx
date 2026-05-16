"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { SearchSuggestions } from "./SearchSuggestions";

import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";
import { useSearchBar } from "@/hooks/useSearchBar";

import { X } from "lucide-react";

export function SearchBar() {
  const router = useRouter();

  const {
    inputValue,
    setInputValue,
    showSuggestions,
    setShowSuggestions,
    hideSuggestions,
    selectSuggestion,
  } = useSearchBar();

  const suggestions = usePokemonSuggestions(inputValue);

  const navigateToPokemon = (name: string) => {
    router.push(`/pokemon/${encodeURIComponent(name.trim())}`);

    setShowSuggestions(false);
  };

  const handleSearch = () => {
    if (!inputValue.trim()) {
      return;
    }

    navigateToPokemon(inputValue);
  };

  return (
    <div className="relative w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="pokemon-search">Search Pokemon</FieldLabel>

        <ButtonGroup>
          <div className="relative flex-1">
            <Input
              id="pokemon-search"
              value={inputValue}
              placeholder="Pokemon name..."
              className="rounded-r-none pr-8"
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={hideSuggestions}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            {inputValue && (
              <button
                type="button"
                aria-label="Clear search"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

          <Button onClick={handleSearch}>Search</Button>
        </ButtonGroup>

        {showSuggestions && (
          <SearchSuggestions
            suggestions={suggestions}
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
