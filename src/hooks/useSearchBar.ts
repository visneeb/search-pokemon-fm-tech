"use client";

import { useCallback, useState } from "react";

const STORAGE_KEY = "pokemon-recent-searches";

function getStoredSearches(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedSearches = localStorage.getItem(STORAGE_KEY);

    return storedSearches ? JSON.parse(storedSearches) : [];
  } catch {
    return [];
  }
}

export function useSearchBar() {
  const [inputValue, setInputValue] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);

  const [recentSearches, setRecentSearches] =
    useState<string[]>(getStoredSearches);

  const saveSearch = useCallback((name: string) => {
    setRecentSearches((prev) => {
      const updated = [name, ...prev.filter((search) => search !== name)].slice(
        0,
        5,
      );

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  }, []);

  const hideSuggestions = useCallback(() => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 150);
  }, []);

  const selectSuggestion = useCallback((name: string) => {
    setInputValue(name);
    setShowSuggestions(false);
  }, []);

  return {
    inputValue,
    setInputValue,

    showSuggestions,
    setShowSuggestions,

    recentSearches,

    hideSuggestions,
    selectSuggestion,
    saveSearch,
  };
}
