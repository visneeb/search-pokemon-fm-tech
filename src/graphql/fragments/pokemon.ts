import { gql } from "@apollo/client";
// Reusable GraphQL fragment for common Pokemon fields
export const POKEMON_FIELDS = gql`
  fragment PokemonFields on Pokemon {
    id
    number
    name

    weight {
      minimum
      maximum
    }

    height {
      minimum
      maximum
    }

    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
`;
