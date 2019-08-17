import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {Card,Button,Tabs,Tab,TabContainer,Row,Col,ListGroup} from 'react-bootstrap'
import { RequestForm } from './RequestForm';
import { withRouter } from 'react-router-dom';
import { ServiceRequest } from './ServiceRequest';
import RequestHistory from './RequestHistory';


const BodyDiv=styled.div`{
    margin:20px;
}`

export class Services extends PureComponent {

    requestHistory(){
        let { history } = this.props;
        history.push({
         pathname: '/RequestHistory',
        
        });


    }


    render() {
        return (




            <BodyDiv className='panel'>
          

            <Tabs defaultActiveKey="serviceRequest" id="uncontrolled-tab-example">
  <Tab eventKey="serviceRequest" title="Service Request">
  <ServiceRequest></ServiceRequest>
  </Tab>
  <Tab eventKey="serviceHistory" title="Service History">
    <RequestHistory />
  </Tab>
  
</Tabs>

           </BodyDiv>
        )
    }
}

export default Services
