import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Docs from './components/pages/Docs';
import Classes from './components/pages/Classes/Classes';
import Maths from './components/pages/Classes/Subjects/Maths';
import Electrical from './components/pages/Classes/Subjects/Electrical';
import Electronics from './components/pages/Classes/Subjects/Electronics';
import Programming from './components/pages/Classes/Subjects/Programming';
import ED from './components/pages/Classes/Subjects/ED';
import Arindam from './components/pages/Arindam';


function App() {
  return (
    <>
        
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Home />
        <Switch>
          <Route path={process.env.PUBLIC_URL+'/'}  exact component={Home}/>
          <Route path="/classes"  exact component={Classes}/>
          <Route path="/docs" exact component={Docs}/>
          <Route path="/classes/mathematics" exact component={Maths}/>
          <Route path="/classes/electrical" exact component={Electrical}/>
          <Route path="/classes/electronics" exact component={Electronics}/>
          <Route path="/classes/programming" exact component={Programming}/>
          <Route path="/classes/ed" exact component={ED}/>
          <Route path="/arindam" exact component={Arindam}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
