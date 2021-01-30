import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Docs from './components/pages/Docs';
import Classes from './components/pages/Classes';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/classes" exact component={Classes}/>
          <Route path="/docs" exact component={Docs}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
