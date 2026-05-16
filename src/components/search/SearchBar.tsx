"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { SearchSuggestions } from "./SearchSuggestions";

import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";
import { useSearchBar } from "@/hooks/useSearchBar";

import { X } from "lucide-react";

export function SearchBar() {
  const {
    inputValue,
    setInputValue,
    showSuggestions,
    setShowSuggestions,
    hideSuggestions,
    selectSuggestion,
  } = useSearchBar();

  const suggestions = usePokemonSuggestions(inputValue);

  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSearch = searchParams.get("search") ?? "";

  useEffect(() => {
    setInputValue(currentSearch);
  }, [currentSearch, setInputValue]);

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    router.push(`/pokemon/${encodeURIComponent(inputValue.trim())}`);
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
              className="pr-8 rounded-r-none"
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={hideSuggestions}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            {inputValue && (
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setInputValue("");
                  setShowSuggestions(false);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
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
              router.push(`/pokemon/${encodeURIComponent(name)}`);
            }}
          />
        )}
      </Field>
    </div>
  );
}
