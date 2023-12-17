import React from 'react';
import { ApolloClient } from '@apollo/client';
import ClientMap from '@/graphql/ApolloClients';

const apolloMultiClientContext = React.createContext<{
  getClient(clientName: string | undefined): ApolloClient<any> | undefined;
}>({
  getClient() {
    return undefined;
  },
});

export const useApolloMultiClient = () => {
  return React.useContext(apolloMultiClientContext);
};

export const ApolloMultiClientProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getClient = (clientName: string) => {
    return ClientMap[clientName]
  };

  return (
    <apolloMultiClientContext.Provider
      value={{ getClient }}
      children={children}
    />
  );
};
