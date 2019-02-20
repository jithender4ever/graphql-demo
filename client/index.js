import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import App from './src/components/App';

const cache = new InMemoryCache();
const link = new HttpLink({
    // uri: 'http://localhost:4001/graphql',
    credentials: 'include'
});

const client = new ApolloClient({
    cache,
    link
});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <App className={'ui container'} />
      </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
