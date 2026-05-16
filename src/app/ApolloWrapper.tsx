"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import { getClient } from "../lib/apollo-client";

type Props = Readonly<{
  children: ReactNode;
}>;

export function ApolloWrapper({ children }: Props) {
  return <ApolloProvider client={getClient()}>{children}</ApolloProvider>;
}
