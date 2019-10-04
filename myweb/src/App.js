import React from 'react';
import './App.css';
import NavbarMain from './components/NavbarMain'
import { Switch, Route } from 'react-router-dom'
import CV from './components/CV'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {
  return (
   <React.Fragment> 
   <NavbarMain />
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

