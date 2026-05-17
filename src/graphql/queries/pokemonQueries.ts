import { gql } from "@apollo/client";
import { POKEMON_FIELDS } from "../fragments/pokemon";

export const GET_POKEMONS = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      ...PokemonFields
    }
  }

  ${POKEMON_FIELDS}
`;

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

export const GET_POKEMON_NAMES = gql`
  query PokemonNames {
    pokemons(first: 151) {
      id
      name
    }
  }
`;
