import React, { PureComponent } from 'react'
import {Row,Col} from 'react-bootstrap'
import styled from 'styled-components'


const RowStyle=styled.div`{
    margin:30px;
    margin-top:10px;
    margin-bottom:10px;
}`



export class TopBar extends PureComponent {

   

    render() {
        return (
  <RowStyle>      
    <Row >
    <Col md={10}><h5 style={{fontFamily:'Arail'}}>Home Services</h5></Col>
    <Col md={1} className="text-left">Login</Col>
    <Col md={1} className="text-left">Register</Col>
  </Row>
  </RowStyle>

        )
    }
}

export default TopBar
