import { registerApolloClient } from "@apollo/client-integration-nextjs";

import { makeClient } from "./make-client";

export const { getClient, query, PreloadQuery } =
  registerApolloClient(makeClient);
