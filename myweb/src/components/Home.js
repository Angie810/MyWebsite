import React from 'react'
import '../App.css'
import icon from '../insta.jpg'
import {Link} from 'react-router-dom'


import {Button, Container, Col, Row, Image} from 'react-bootstrap'


function Home(){
    return(
        <React.Fragment>
        <div className="App-header">
              <div className="container">
                  <h1 className="text-xl-left">Angie Xiaotong Huang 
                  </h1>
                  <h2 className="text-xl-left">Junior C#.NET Developer </h2>
                  <h2 className="text-xl-left"><Link to="/Contact">Hire Me Today</Link></h2>
    </div>
        </div>
        <div className="container">
            <div className="row">
        <Container className="col-sm">
        <Row>
        <Col xs={6} md={4}>
        <Image src={icon} rounded width={500} height={800}/>
        </Col>
       
       

        </Row>
        </Container>
       <div className="col-sm">
           <div className="text-beside-picture">
               <h2>My Passion </h2>
           <p className="font-italic">My passion is learning new stuff. Curiosity kills cats but it doesn't kill me. It makes me stronger. I'm new to the IT industry but I am willing to learn and I am a quick learner. Looking forward to hearing from you. :)</p></div>
</div>
        </div>
        </div>
        
        

         </React.Fragment>
        

    )
}
export default Home;