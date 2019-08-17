import React, { PureComponent } from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import styled from 'styled-components'
import avatar from '../img/bat.png'

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
    <Col md={9} className="headerTitle" style={{ marginTop: "10px"    }}><h1 style={{fontFamily:'Arail',fontSize:"26px"}}>Home Services</h1></Col>
    
    <Col md={1} style={{marginTop: "18px"}} className="text-left"><img src={avatar} alt="Avatar" class="avatar"/>Admin</Col>
    <Col md={1}   className="text-left"><Button onClick={()=>{this.props.logout();}} style={{margin:"10px",width:"150px"}} variant="primary" type="button" >
                            Logout
                  </Button></Col>
  </Row>
  </RowStyle>

        )
    }
}

export default TopBar
