import React, { Profiler } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  client,
} from './apollo/apolloConfig';
import {
  ApolloProvider,
} from 'react-apollo';
import Layout from './components/layout';


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route
          path='/'
          component={Layout}
        />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
