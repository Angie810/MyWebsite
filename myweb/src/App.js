import React from 'react';
import './App.css';
import NavbarMain from './components/NavbarMain'
import { Switch, Route, Link } from 'react-router-dom'
import CV from './components/CV'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Contact from './components/Contact'
import icon from './icon home.png'


function App() {
  return (
   <React.Fragment> 
   {/* <NavbarMain /> */}
  
   <nav className="navbar navbar-light bg-light">
     <div className="container-navbar">
     <Link className="navbar-brand" to="/"><img src={icon} alt="home" width={30} height={25}/></Link>
  <Link className="navbar-brand" to="/CV">CV</Link>
  <Link className="navbar-brand" to="/Portfolio">Portfolio</Link>
  <Link className="navbar-brand" to="/About">About</Link>
  <Link className="navbar-brand" to="/Contact">Contact</Link>
  </div>
</nav>
     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/CV" component={CV} />
        <Route path="/About" component={About} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </Switch>
     
        
      
           
        <div className="footer">
        <h2>Mobile: 072-316 55 76</h2>
        <h2>Email: angie.granberg@gmail.com</h2>
        </div>
            
    
        
     </React.Fragment>
  );
}

export default App;

