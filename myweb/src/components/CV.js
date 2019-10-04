import React from 'react'
import { Document, Page } from "react-pdf";
import './CV.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import pdf from '../angiecv.pdf'


class CV extends React.Component{

    
  render() {
   
        return (
         <React.Fragment>
         <div className="header1">
        <h1 className="text-xl-left">Dig a little deeper.
          </h1>
          
         <Button variant="primary" size="lg" href={pdf}  >
   REVIEW CV
  </Button>
  
  
         </div>
           <Container>
           <Row>
             <Col className="font-weight-bold"><h2>My knowledge:</h2>
             <ul>
               <li>C#</li>
               <li>.NET</li>
               <li>Microsoft SQL Server</li>
               <li>ASP.NET</li>
               <li>HTML</li>
               <li>JavaScript</li>
               <li>React</li>
               <li>CSS</li>
               <li>NVC</li>
               <li>Scrum/Agile Methodology</li>
               <li>UX/UI</li>
               <li>Bootstrap</li>
               <li>Mobile First Thinking</li>
               <li>Node.js (limited)</li>
             </ul>
             </Col>
             <Col className="font-weight-bold">
             <h2>Education:</h2><ul>
               <li>English Language & Literature, BA, Hainan University </li>
               <li>Communication & Applied Linguistics, MA, Newcastle University </li>
               <li>C#.NET Academy, Intensive Course, Academy of Academic Work</li>
             </ul></Col>
           </Row>
          
         </Container>
         <div className="container">
         <Button variant="secondary" size="lg" href={pdf} active >
   REVIEW CV
  </Button>
  
  </div>
         
         </React.Fragment>
        );
      }
}
export default CV;