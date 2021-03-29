import React from 'react';
import Router from 'Router';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CartContextProvider from 'contexts/CartContext';

const App = () => {
  const client = new ApolloClient({
    uri: 'https://pangaea-interviews.now.sh/api/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ApolloProvider>
  );
};

export default App;
