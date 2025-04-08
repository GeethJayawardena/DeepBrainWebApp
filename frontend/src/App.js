import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
