import React, { FunctionComponent, useMemo } from "react";
import { IntlProvider } from "react-intl";
import CommonRouter from "./CommonRouter";
import NavBar from '@/components/NavBar';
import { ApolloProvider, ApolloClient, HttpLink, ApolloLink, RequestHandler, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
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

const generateClient = (...middleWares: (ApolloLink | RequestHandler)[]) => new ApolloClient({
  cache: new InMemoryCache(),
  link: middleWares.length == 0 ? httpLink : from([ ...middleWares, httpLink ]),
});

const TOKEN_EXPIRED = 'jwt expired';

const App: FunctionComponent<any> = () => {
  const lang = useRecoilValue(langState);
  const token = useRecoilValue(tokenState);

  const client = useMemo(() => {
    if (token !== undefined) {
      const { authorization, authorizationRefresh } = token
      const authMiddleware = new ApolloLink((operation, forward) => {
        operation.setContext(({ headers = {} }) => {
          console.log('default headers', headers)
          return {
            headers: {
              ...headers,
              [AUTHORIZATION_KEY]: withBearer(authorization),
              // [AUTHORIZATION_REFRESH_KEY]: withBearer(authorizationRefresh),
            }
          }
        });
      
        return forward(operation);
      })

      const refreshMiddleware = onError(({ graphQLErrors, operation, forward }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('operation', operation)
        if (graphQLErrors?.[0].message === TOKEN_EXPIRED) {
          // const refresh = fromPromise(
          //   client
          //     .mutate({ mutation: REISSUANCE_ACCESS_TOKEN })
          //     .then(({ data }) => {
          //       return data.ReissuanceAccessToken.ok;
          //     }),
          // );
      
          // return refresh.filter((result) => result).flatMap(() => forward(operation));
          return forward(operation);
        }
      });

      return generateClient(authMiddleware, refreshMiddleware)
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
