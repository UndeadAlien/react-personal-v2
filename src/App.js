import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from './components/Projects/Projects';
import Hero from './components/Hero/Hero';
import SideBar from './components/SideBar/SideBar';

import './components/Styles/responsive/responsive.css'
import './components/Styles/imports/imports.css'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Hero />
        <Projects />
        <SideBar /> 
      </Router>
    </>
  );
}

export default App;
