import React from 'react';
import NavBar from '../navbar';
import { Switch, Route } from 'react-router';
import LoginScreen from '../../screens/loginScreen';
import SignupScreen from '../../screens/signupScreen';
import profileScreen from '../../screens/profileScreen';
import HomeScreen from '../../screens/homeScreen';

const Layout = () => {
  return(
    <div>
      <NavBar/>
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
          <Route
            path='/'
            component={HomeScreen}
          />
        </Switch>
    </div>
  );
}

export default Layout;