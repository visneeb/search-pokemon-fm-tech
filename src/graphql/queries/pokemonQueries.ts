import { gql } from "@apollo/client";

import { POKEMON_FIELDS } from "../fragments/pokemon";

// Query: Get a list of Pokemon
export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {

    // Fetch Pokémon list with pagination limit
    pokemons(first: $first) {

      // Reuse shared Pokémon fields from fragment
      ...PokemonFields
    }
  }

  ${POKEMON_FIELDS}
`;

// Query: Get a single Pokemon by id or name
export const GET_POKEMON = gql`
  query Pokemon($id: String, $name: String) {

    // Fetch Pokémon details
    pokemon(id: $id, name: $name) {

      // Reuse shared Pokémon fields
      ...PokemonFields

      // Fetch attack information
      attacks {

        // Fast attacks
        fast {
          name
          type
          damage
        }

        // Special attacks
        special {
          name
          type
          damage
        }
      }

      // Fetch evolution chain
      evolutions {
        id
        number
        name
        image

        // Nested evolutions
        evolutions {
          id
          number
          name
          image
        }
      }
    }
  }

  ${POKEMON_FIELDS}
`;

// Query: Get Pokemon names for search/autocomplete
export const GET_POKEMON_NAMES = gql`
  query PokemonNames {

    // Fetch first 151 Pokémon names
    pokemons(first: 151) {
      id
      name
    }
  }
`;
