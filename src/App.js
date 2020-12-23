import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Home from './pages/Home';

import './App.css';
import './components/Styles/responsive/responsive.css'
import './components/Styles/imports/imports.css'
import Resume from './components/Resume/Resume';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
