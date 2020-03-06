import React, { Profiler } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LoginScreen from './screens/loginScreen';
import {
  client,
} from './apollo/apolloConfig';
import {
  ApolloProvider,
} from 'react-apollo';
import SignupScreen from './screens/signupScreen';
import profileScreen from './screens/profileScreen';



function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route
            path='/login'
            component={LoginScreen}
          />
          <Route
            path='/signup'
            component={SignupScreen}
          />
          <Route
            path='/profile'
            component={profileScreen}
          />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
