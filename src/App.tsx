import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route
        path='/'
        exact={true}
        render={() => {return <h1>it works!!!!!!</h1>}}
      />
    </BrowserRouter>
  );
}

export default App;
