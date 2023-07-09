import React, { FunctionComponent, useMemo } from "react";
import { IntlProvider } from "react-intl";
import CommonRouter from "./CommonRouter";
import NavBar from '@/components/NavBar';
import { ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import { BrowserRouter as Router } from "react-router-dom";

import {
  useRecoilValue,
} from "recoil";
import langState, { messages } from "@/state/lang";
import { apiMeta } from "@/meta";
import tokenState from "@/state/token";
import { withBearer, AUTHORIZATION_KEY, AUTHORIZATION_REFRESH_KEY } from "@/api/account";

const { API_ENDPOINT } = apiMeta

const httpLink = new HttpLink({ uri: `${API_ENDPOINT}/graphql` });

const generateClient = (authMiddleware: ApolloLink | undefined = undefined) => new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware == undefined ? httpLink : concat(authMiddleware, httpLink),
});

const App: FunctionComponent<any> = () => {
  const lang = useRecoilValue(langState);
  const token = useRecoilValue(tokenState);

  const client = useMemo(() => {
    if (token !== undefined) {
      const { authorization, authorizationRefresh } = token
      const authMiddleware = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            [AUTHORIZATION_KEY]: withBearer(authorization),
            [AUTHORIZATION_REFRESH_KEY]: withBearer(authorizationRefresh),
          }
        }));
      
        return forward(operation);
      })
      return generateClient(authMiddleware)
    } else {
      return generateClient()
    }
  }, [token])

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <ApolloProvider client={client}>
        <Router>
          <NavBar />
          <CommonRouter />
        </Router>
      </ApolloProvider>
    </IntlProvider>
  );
};

export default App;
