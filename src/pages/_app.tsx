import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Inter} from 'next/font/google'
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apolloClient";

const inter = Inter({subsets: ['latin']})

export default function App({Component, pageProps}: AppProps) {
  return (
      <ApolloProvider client={client}>
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
  )
}
