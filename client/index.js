import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './components/SongList';

const client = new ApolloClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <SongList />
  </ApolloProvider>,

  document.querySelector('#root')
);
