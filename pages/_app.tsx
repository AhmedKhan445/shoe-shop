import "@/styles/globals.scss";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/600.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client";
import Smartlook from "smartlook-client";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    Smartlook.init("91364c9de0632717bef2034465f9a83818940056");
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
