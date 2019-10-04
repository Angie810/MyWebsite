import React from 'react'
import {Switch, Route} from 'react-router-dom';
import './about.css'
import {Container, Row, Image, Col} from 'react-bootstrap'
import icon from '../india.jpg'

function About(){
    return(
        
      <React.Fragment>
            <div className="about-header"><h1>My Personality & My Hobby. </h1>
            
            </div>
            <div className="container">
            <div className="row">
        
            <div className="col-sm">
           <div className="text-beside-picture">
               <h2>My Personality & Hobby </h2>
           <p className="font-italic">I love travelling, meeting new people, getting to know their countries and cultures, 
           and I love Sci-fi movies especially space-themed movies. I think I have seen most of the movies about space travel, challenge me!</p></div>
</div><Container className="col-sm">
        <Row>
        <Col xs={6} md={4}>
        <Image src={icon} rounded width={600} height={500}/>
        </Col>
       
       

        </Row>
        </Container>
       
        </div>
        </div>
        </React.Fragment>
    )
}
export default About;