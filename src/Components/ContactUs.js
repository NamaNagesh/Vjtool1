import React, { PureComponent } from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'

const BodyDiv=styled.div`{
    margin:30px;
}`

export default class ContactUs extends PureComponent {
    render() {
        return (
            <BodyDiv className='panel'>
               <Card style={{ widwth: '100%' }}>
  
  <Card.Body>
    <Card.Title>Contact US</Card.Title>
    <Card.Text>
     Call on below numbers for help.
    </Card.Text>
    <Card.Text>
     23434544564.
    </Card.Text>
    <Card.Text>
     23434544564.
    </Card.Text>
    <Card.Text>
     Email us.
    </Card.Text>
    <Card.Text>
     abc@gmail.com
    </Card.Text>
  </Card.Body>
  </Card>
            </BodyDiv>
        )
    }
}
