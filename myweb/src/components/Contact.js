import React from 'react'
import '../App.css'
import icon from '../insta.jpg'
import './contact.css'
import image from '../sea.jpg'
import {Card} from 'react-bootstrap'




import {Button, Container, Col, Row, Image} from 'react-bootstrap'

function Contact(){
    return(
       <div>
        <div className="header">
                <div className="container">
                  <h1 className="text-xl-left">Connect with me today
                  </h1>
                  
                  
    </div>
        </div>
      
      <div className="container"> 
      <div className="row">
          
      <div className="col sm 6 ">
    
    <Card style={{ width: '30rem' , height: '18rem'}}>
    
    <Card.Body>
    <Card.Text>
      
    </Card.Text>
    <Card.Title>General Questions</Card.Title>
    <Card.Text>
    Feel free to reach out to me if you have any questions or comments. Also, you could always just send me a friendly hello.
    </Card.Text>
   <Button variant="outline-info" href="mailto:angie.granberg@gmail.com">SAY HELLO</Button>
    </Card.Body>
    </Card>
   
    
    </div>
          <div className="col sm">
         
    <Card style={{ width: '30rem',height: '18rem' }}>
    
    <Card.Body>
        
    <Card.Text>
      
    </Card.Text>
    <Card.Title>Ring</Card.Title>
    <Card.Text>
      Or reach out to me. Call <p className="no">072-316 55 76</p> Mon-Fri:9am-5pm (GMT+1)
    </Card.Text>
    <Button variant="outline-info"href="mailto:angie.granberg@gmail.com">RING</Button>
    </Card.Body>
    </Card>
    
    </div>
   
    <div className="col sm">
    


</div>
</div>
</div> 
</div>    

    )
}
export default Contact;