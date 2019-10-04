import React from 'react'
import {Link } from 'react-router-dom'
import icon from '../icon home.png'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function NavbarMain(){
    return(
      
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><img src={icon} alt="home" width={35} height={30}/></Navbar.Brand>
        <Nav className="mr-auto">
               <Nav.Link href="/CV">CV</Nav.Link>
               <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
               <Nav.Link href="/About">About</Nav.Link>
               <Nav.Link href="/Contact">Contact</Nav.Link>
         </Nav> 
           
        </Navbar>
      
    );
}
export default NavbarMain;

