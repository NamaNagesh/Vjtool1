import React, { Component } from 'react'
import styled from 'styled-components'
import {Card,Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

const BodyDiv=styled.div`{
    margin:30px;
}`

export default class Main extends Component {

  onButtonClick(){
    let { history } = this.props;
    history.push({
     pathname: '/services',
    
    });
   }

    render() {
        return (
            <BodyDiv className='panel'>
             <Card style={{ width: '100%' }}>
  
  <Card.Body>
    <Card.Title>Home Services</Card.Title>
    <Card.Text>
      We Provide all home services like Interior Designing, Plumber Works, Electrical Works.
      To avail our services click on services button and make a request.
    </Card.Text>
    <Button variant="primary" onClick={()=>this.onButtonClick()}>Services</Button>
  </Card.Body>
  </Card>
            </BodyDiv>
        )
    }
}
