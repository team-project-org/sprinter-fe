import React from "react";
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import "./index.less";
import App from "./App";
import { RecoilRoot } from "recoil";
import * as serviceWorker from "./serviceWorker";
import { apiMeta } from "@/meta";
import { JWT_KEY } from "@/state/token";
import { REFRESH_KEY } from "@/state/refreshToken";

const { API_ENDPOINT } = apiMeta

const httpLink = new HttpLink({ uri: `${API_ENDPOINT}/graphql` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem(JWT_KEY) || null,
      ['authorization-refresh']: localStorage.getItem(REFRESH_KEY) || null,
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
