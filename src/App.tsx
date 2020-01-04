import React from 'react';
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



function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Redirect
            from='/'
            exact={true}
            to='/login'
          />
          <Route
            path='/login'
            component={LoginScreen}
          />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
