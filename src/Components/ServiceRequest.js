import React, { PureComponent } from 'react'
import {Card,Button,Tab,TabContainer,Row,Col,ListGroup} from 'react-bootstrap'
import { RequestForm } from './RequestForm';

export class ServiceRequest extends PureComponent {
    render() {
        return (
            <Card style={{ width: '100%',marginBottom:'10px'}}>
 
 <Card.Body style={{ padding:'2.25rem',paddingTop:'1.25rem'}}>
 
   <Card.Text>
    Choose the service 
   </Card.Text>
  
   
   
   <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    <Col sm={4}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
         Electronics
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
         Interior Design
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
         Plumber Work
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey="#link1">
        <RequestForm serviceType="Electronics"></RequestForm>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        <RequestForm serviceType="Interior Design"></RequestForm>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
        <RequestForm serviceType="Plumber Work"></RequestForm>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>


 </Card.Body>
 </Card>
        )
    }
}

export default ServiceRequest
