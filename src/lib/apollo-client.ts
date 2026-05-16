import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
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
    },
  }),
});

export function getClient() {
  return client;
}
