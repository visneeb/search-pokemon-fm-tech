import type { Pokemon } from "@/types/pokemonType";

// Mock Pokémon test data
const bulbasaur: Pokemon = {
  id: "UG9rZW1vbjowMDE=",
  number: "001",
  name: "Bulbasaur",

  classification: "Seed Pokémon",

  // Pokémon types
  types: ["Grass", "Poison"],

  // Type resistances
  resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],

  // Type weaknesses
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],

  fleeRate: 0.1,
  maxCP: 951,
  maxHP: 1071,

  image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",

  // Weight range
  weight: {
    minimum: "6.04kg",
    maximum: "7.76kg",
  },

  // Height range
  height: {
    minimum: "0.61m",
    maximum: "0.79m",
  },
};

const charmander: Pokemon = {
  id: "UG9rZW1vbjowMDQ=",
  number: "004",
  name: "Charmander",

  classification: "Lizard Pokémon",

  types: ["Fire"],

  resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],

  weaknesses: ["Water", "Ground", "Rock"],

  fleeRate: 0.1,
  maxCP: 841,
  maxHP: 955,

  image: "https://img.pokemondb.net/artwork/charmander.jpg",

  weight: {
    minimum: "7.44kg",
    maximum: "9.56kg",
  },

  height: {
    minimum: "0.53m",
    maximum: "0.79m",
  },
};

const squirtle: Pokemon = {
  id: "UG9rZW1vbjowMDc=",
  number: "007",
  name: "Squirtle",

  classification: "Tiny Turtle Pokémon",

  types: ["Water"],

  resistant: ["Fire", "Water", "Ice", "Steel"],

  weaknesses: ["Electric", "Grass"],

  fleeRate: 0.1,
  maxCP: 891,
  maxHP: 1008,

  image: "https://img.pokemondb.net/artwork/squirtle.jpg",

  weight: {
    minimum: "7.88kg",
    maximum: "10.13kg",
  },

  height: {
    minimum: "0.44m",
    maximum: "0.56m",
  },
};

// Test Pokémon type data
describe("Pokémon types", () => {
  // Bulbasaur tests
  describe("Bulbasaur", () => {
    // Check if Grass type exists
    it("has Grass as a type", () => {
      expect(bulbasaur.types).toContain("Grass");
    });

    // Check total number of types
    it("has the correct number of types", () => {
      expect(bulbasaur.types).toHaveLength(2);
    });
  });

  // Charmander tests
  describe("Charmander", () => {
    // Check if Fire type exists
    it("has Fire as a type", () => {
      expect(charmander.types).toContain("Fire");
    });

    // Check if only one type exists
    it("has only one type", () => {
      expect(charmander.types).toHaveLength(1);
    });
  });

  // Squirtle tests
  describe("Squirtle", () => {
    // Check if Water type exists
    it("has Water as a type", () => {
      expect(squirtle.types).toContain("Water");
    });

    // Check if only one type exists
    it("has only one type", () => {
      expect(squirtle.types).toHaveLength(1);
    });
  });
});
