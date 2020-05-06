import React, { useState } from 'react';
import NavBar from '../navbar';
import { Switch, Route } from 'react-router';
import ProfileScreen from '../../screens/profileScreen';
import HomeScreen from '../../screens/homeScreen';
import AuthenticationRoute from '../AuthRoute';
import { IS_LOGGED_IN } from '../../apollo/requests/authRequests';
import { useQuery } from '@apollo/react-hooks';
import EventsScreen from '../../screens/eventsScreen';

const Layout = () => {
  const [isAuth, setIsAuth] = useState(true);

  useQuery(IS_LOGGED_IN, {
    onCompleted: (data) => {
      setIsAuth(data.isLoggedIn);
      console.log('dataaaaa', data.isLoggedIn);
    }
  });

  return(
    <div>
      <NavBar/>
      <Switch>
        {/* <AuthenticationRoute
          path='/'
          exact={true}
          fallbackRoute={'/login'}
          hasPermission={isAuth}
          component={HomeScreen}
        /> */}
        <Route
          path='/'
          exact
          component={HomeScreen}
        />
        <Route
          path='/events'
          exact
          component={EventsScreen}
        />
        <AuthenticationRoute
          path='/profile'
          exact={true}
          fallbackRoute={'/login'}
          hasPermission={isAuth}
          component={ProfileScreen}
        />
      </Switch>
    </div>
  );
}

export default Layout;