// Normalize a Pokémon name into a consistent searchable format

export function normalizePokemonName(value: string) {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}
