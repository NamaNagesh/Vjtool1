import React, { PureComponent } from 'react'
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const NavDiv=styled.div`{
    margin:30px;
    margin-top:10px;
}`


export class Header extends PureComponent {
    render() {
        return (

 <NavDiv>
 <Nav variant="pills" defaultActiveKey="/">
  <Nav.Item>
    <NavLink  className="nav-link" activeClassName="nav-link active" to={"/home"}>Home</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink  className="nav-link" to={"/services"}>Services</NavLink>
  </Nav.Item>
  <Nav.Item>
    <NavLink  className="nav-link" to={"/contactus"}> Contact Us</NavLink>
  </Nav.Item>
   {/* <Nav.Item >
   
       <NavLink  className="nav-link" to={"/aboutus"}> About Us</NavLink>
  
  </Nav.Item> */}
</Nav>
</NavDiv>        
        )
    }
}

export default Header
