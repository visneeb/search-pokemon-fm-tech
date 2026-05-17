"use client";

import type { ReactNode } from "react";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";

import { makeClient } from "./make-client";

type Props = {
  children: ReactNode;
};

export function ApolloWrapper({ children }: Readonly<Props>) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient()}>
      {children}
    </ApolloNextAppProvider>
  );
}
