import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  client,
} from './apollo/apolloConfig';
import {
  ApolloProvider,
} from 'react-apollo';
import Layout from './components/layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import AuthenticationRoute from './components/AuthRoute';
import { IS_LOGGED_IN } from './apollo/requests/authRequests';
import LoginScreen from './screens/loginScreen';
import SignupScreen from './screens/signupScreen';

function App() {
  const [isAuth, setIsAuth] = useState(true);
  useEffect(() => {
    const onMount = async () => {
    const { data } = await client.query({
      query: IS_LOGGED_IN
    });
      console.log(data);
      setIsAuth(data.isLoggedIn);
    }
    onMount();
  }, [])
  return (
    <ApolloProvider client={client}>
      <ParallaxProvider>
        <BrowserRouter>
          <Route
              exact
              path='/login'
              component={LoginScreen}
            />
            <Route
              exact
              path='/signup'
              component={SignupScreen}
            />
          <Route
            path="/"
            component={Layout}
          />
        </BrowserRouter>
      </ParallaxProvider>
    </ApolloProvider>
  );
}

export default App;
