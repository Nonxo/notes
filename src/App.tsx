import React from 'react';
import './styles/App.scss';
import { Switch, Route } from 'react-router-dom';
import Auth from "./layouts/Auth";


const App = () => {
  return (
      <Switch>
          <Route path="/" component={Auth} />
      </Switch>
  )
};

export default App;


