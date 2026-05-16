"use client";

import { useCallback, useState } from "react";

export function useSearchBar() {
  const [inputValue, setInputValue] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);

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
    hideSuggestions,
    selectSuggestion,
  };
}
