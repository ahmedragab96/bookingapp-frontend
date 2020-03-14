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
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  return (
    <ApolloProvider client={client}>
      <ParallaxProvider>
        <BrowserRouter>
          <Route
            path='/'
            component={Layout}
          />
        </BrowserRouter>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

export default App;
