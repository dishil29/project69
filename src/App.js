import React from 'react';
import './index.css'
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './about';
import Project from './project';
import Contact from './contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/Project">
            <Project/>
          </Route>
          <Route exact path="/Contact">
            <Contact/>
          </Route>
        </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
