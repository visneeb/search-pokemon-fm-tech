"use client";

import { useCallback, useState } from "react";

// LocalStorage key for recent searches
const STORAGE_KEY = "pokemon-recent-searches";

// Get recent searches from localStorage
function getStoredSearches(): string[] {

  // Prevent access during server-side rendering
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedSearches = localStorage.getItem(STORAGE_KEY);

    // Parse stored JSON or return empty array
    return storedSearches ? JSON.parse(storedSearches) : [];
  } catch {

    // Fallback if JSON parsing fails
    return [];
  }
}

export function useSearchBar() {

  // Current input value
  const [inputValue, setInputValue] = useState("");

  // Control suggestion dropdown visibility
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Store recent searches from localStorage
  const [recentSearches, setRecentSearches] =
    useState<string[]>(getStoredSearches);

  // Save recent search
  const saveSearch = useCallback((name: string) => {

    setRecentSearches((prev) => {

      // Add newest search, remove duplicates, limit to 5 items
      const updated = [name, ...prev.filter((search) => search !== name)].slice(
        0,
        5,
      );

      // Save updated searches to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      return updated;
    });
  }, []);

  // Hide suggestions with small delay
  // (helps prevent blur/click conflict)
  const hideSuggestions = useCallback(() => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 150);
  }, []);

  // Select suggestion and fill input
  const selectSuggestion = useCallback((name: string) => {
    setInputValue(name);
    setShowSuggestions(false);
  }, []);

  // Expose states and functions
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