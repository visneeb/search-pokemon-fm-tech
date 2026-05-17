import { ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";
import { HttpLink } from "@apollo/client";

export function makeClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://graphql-pokemon2.vercel.app/",
    }),

    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            pokemons: {
              merge(_, incoming) {
                return incoming;
              },
            },
          },
        },

        Pokemon: {
          fields: {
            attacks: {
              merge: false,
            },

            evolutions: {
              merge: false,
            },
          },
        },
      },
    }),
  });
}
