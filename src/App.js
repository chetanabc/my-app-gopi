import React from 'react';
import logo from './logo.svg';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Hell from './pages/Aboutus';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={Hell} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
