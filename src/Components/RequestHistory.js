import React, { Component } from 'react'
import { Card,Accordion,Button,Row,Col } from 'react-bootstrap'

export default class RequestHistory extends Component {
    render() {
        return (
            <Card style={{ width: '100%',marginBottom:'10px'}}>
 
 <Card.Body style={{ padding:'2.25rem',paddingTop:'1.25rem'}}>
 
   <Card.Text>
   Request History
   </Card.Text>

   <Accordion >
  <Card style={{ border:'2px solid rgba(0, 0, 0, 0.125)'}}>
    <Card.Header style={{ borderBottom:'0px'}}>
        <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>RequestId</b></div>
                   <div>12312324</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Service type</b></div>
                   <div>Electronics Service</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Status</b></div>
                   <div>In Progress</div>
                 </div></Col>
        </Row>
        
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
      More Details
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> <Row>
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Name</b></div>
                   <div>12312324</div>
                 </div></Col>
           
                 <Col><div style={{ padding:'5px'}}>
                   <div><b>Phone</b></div>
                   <div>121232313</div>
                 </div></Col>     
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Email</b></div>
                   <div>abe@gmail.com</div>
                 </div></Col>
        </Row>
        <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Description</b></div>
                   <div>Need electronic service at home</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Comments</b></div>
                   <div>Worker assigned</div>
                 </div></Col>
             <Col><div style={{ padding:'5px'}}>
                   <div><b>Address</b></div>
                   <div>flno:121,street1, Gachibowli,500090</div>
                 </div></Col>
        </Row></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card style={{ border:'2px solid rgba(0, 0, 0, 0.125)'}}>
    <Card.Header style={{ borderBottom:'0px'}}>
     <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>RequestId</b></div>
                   <div>12912326</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Service type</b></div>
                   <div>Plumber Service</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Status</b></div>
                   <div>In Progress</div>
                 </div></Col>
        </Row>
        
      <Accordion.Toggle as={Button} variant="primary" eventKey="1">
       More Details
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> <Row>
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Name</b></div>
                   <div>12312324</div>
                 </div></Col>
           
                 <Col><div style={{ padding:'5px'}}>
                   <div><b>Phone</b></div>
                   <div>121232313</div>
                 </div></Col>     
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Email</b></div>
                   <div>abe@gmail.com</div>
                 </div></Col>
        </Row>
        <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Description</b></div>
                   <div>Need electronic service at home</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Comments</b></div>
                   <div>Worker assigned</div>
                 </div></Col>
             <Col><div style={{ padding:'5px'}}>
                   <div><b>Address</b></div>
                   <div>flno:121,street1, Gachibowli,500090</div>
                 </div></Col>
        </Row></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>

   </Card.Body>
   </Card>
        )
    }
}
