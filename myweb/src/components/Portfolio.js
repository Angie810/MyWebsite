import React from 'react'
import {Card, Button} from 'react-bootstrap'
import '../App.css';


function Portfolio(){
    return(
       <div className="container"> 
  
      <div className="row">
      <div className="col sm 6 ">
    
    <Card style={{ width: '18rem' , height: '18rem'}}>
    
    <Card.Body>
    <Card.Text>
      Code Snippet
    </Card.Text>
    <Card.Title>Hang a Man Game</Card.Title>
    <Card.Text>
     A very fun guessing game. 
    </Card.Text>
   <Button variant="outline-info" href="https://github.com/Angie810">GET NOW</Button>
    </Card.Body>
    </Card>
   
    
    </div>
          <div className="col sm">
         
    <Card style={{ width: '18rem',height: '18rem' }}>
    
    <Card.Body>
        
    <Card.Text>
      Code Snippet
    </Card.Text>
    <Card.Title>Prize Drawing Program</Card.Title>
    <Card.Text>
      A super fun prize drawing program. A perfect activity which is suitable for your company events.
    </Card.Text>
    <Button variant="outline-info"href="https://github.com/Angie810">GET NOW</Button>
    </Card.Body>
    </Card>
    
    </div>
   
    <div className="col sm">
    
<Card style={{ width: '18rem',height: '18rem'}}>

<Card.Body>
    
<Card.Text>
      Code Snippet
    </Card.Text>
<Card.Title>Group Division Program</Card.Title>
<Card.Text>
  Ever wanted a program that can randomly divide the groups for you? This program suits perfectly!
</Card.Text>
<Button variant="outline-info"href="https://github.com/Angie810">GET NOW</Button>
</Card.Body>
</Card>

</div>
</div>
</div> 
    )
}
export default Portfolio;