export type Measurement = {
  minimum: string;
  maximum: string;
};

export type Attack = {
  name: string;
  type: string;
  damage: number;
};

export type Evolution = {
  id: string;
  number: string;
  name: string;
  image: string;
  evolutions?: Evolution[];
};

export type PokemonAttacks = {
  fast: Attack[];
  special: Attack[];
};

export type Pokemon = {
  id: string;
  number: string;
  name: string;

  classification: string;

  types: string[];
  resistant: string[];
  weaknesses: string[];

  fleeRate: number;
  maxCP: number;
  maxHP: number;

  image: string;

  weight: Measurement;
  height: Measurement;

  attacks?: PokemonAttacks;

  evolutions?: Evolution[];
};

export type PokemonSuggestion = Pick<Pokemon, "id" | "name">;

export type GetPokemonsData = {
  pokemons: Pokemon[];
};

export type GetPokemonsVars = {
  first: number;
};

export type GetPokemonData = {
  pokemon: Pokemon | null;
};

export type GetPokemonVars = {
  id?: string;
  name?: string;
};

export type GetPokemonNamesData = {
  pokemons: PokemonSuggestion[];
};
