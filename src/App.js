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
import MathsBooks from './components/pages/Books/Maths-Books';
import ElectricalBooks from './components/pages/Books/Electrical-Books';
import ElectronicsBooks from './components/pages/Books/Electronics-Books';
import ProgrammingBooks from './components/pages/Books/Programming-Books';
import EDBooks from './components/pages/Books/ED-Books';


function App() {
  return (
    <>
        
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/classes"  exact component={Classes}/>
          <Route path="/docs" exact component={Docs}/>
          <Route path="/arindam" exact component={Arindam}/>
          {/* classes routes */}
          <Route path="/classes/mathematics" exact component={Maths}/>
          <Route path="/classes/electrical" exact component={Electrical}/>
          <Route path="/classes/electronics" exact component={Electronics}/>
          <Route path="/classes/programming" exact component={Programming}/>
          <Route path="/classes/ed" exact component={ED}/>
          {/* Books routes */}
          <Route path="/mathematics-books" exact component={MathsBooks}/>
          <Route path="/electrical-books" exact component={ElectricalBooks}/>
          <Route path="/electronics-books" exact component={ElectronicsBooks}/>
          <Route path="/programming-books" exact component={ProgrammingBooks}/>
          <Route path="/ed-books" exact component={EDBooks}/>

        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
