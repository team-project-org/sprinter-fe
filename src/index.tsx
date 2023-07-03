import React from "react";
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';
import "./index.less";
import App from "./App";
import { RecoilRoot } from "recoil";
import * as serviceWorker from "./serviceWorker";
import { apiMeta } from "@/meta";
import { JWT_KEY } from "@/state/token";
import { REFRESH_KEY } from "@/state/refreshToken";

const { API_ENDPOINT } = apiMeta

const authLink = setContext(() => {
  const token = localStorage.getitem(JWT_KEY);
  const refreshToken = localStorage.getitem(REFRESH_KEY);
  return {
    headers: {
      Authorization : token,
      ['Authorization-refresh'] : refreshToken,
    }
}})

const httpLink = new HttpLink({
  uri: `${API_ENDPOINT}/graphql`
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
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
