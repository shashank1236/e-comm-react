import * as React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import HomePage from './pages/HomePage';

export const App: React.FC = () => {
  const [client, setClient] = React.useState<ApolloClient<NormalizedCacheObject>>();

  React.useEffect(() => {
    setClient(
      new ApolloClient({
        uri: `${document.location.origin}/graphql`,
        cache: new InMemoryCache(),
        headers: {
          // "Store": "react_commerce_store_view"
        }
      })
    );
  }, []);

  return (
    <>
      {client ? (
        <ApolloProvider client={client as ApolloClient<NormalizedCacheObject>}>
          <HomePage />
        </ApolloProvider>
      ) : null}
    </>
  );
};
