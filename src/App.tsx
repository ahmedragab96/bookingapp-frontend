import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import LoginScreen from './screens/loginScreen';

function App() {
  return (
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
  );
}

export default App;
