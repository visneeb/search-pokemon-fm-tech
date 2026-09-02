import { gql } from "@apollo/client";

import { POKEMON_FIELDS } from "../fragments/pokemon";

// Query: Get a list of Pokemon
export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {

    pokemons(first: $first) {

      ...PokemonFields
    }
  }

  ${POKEMON_FIELDS}
`;

// Query: Get a single Pokemon by id or name
export const GET_POKEMON = gql`
  query Pokemon($id: String, $name: String) {


    pokemon(id: $id, name: $name) {

      ...PokemonFields


      attacks {


        fast {
          name
          type
          damage
        }

        special {
          name
          type
          damage
        }
      }

      evolutions {
        id
        number
        name
        image

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

    pokemons(first: 151) {
      id
      name
    }
  }
`;
