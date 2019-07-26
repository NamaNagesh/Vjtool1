import React, { PureComponent } from 'react'
import { Card,Form,Button } from 'react-bootstrap'



export class RequestForm extends PureComponent {

constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.phoneRef = React.createRef();
    this.addressRef = React.createRef();
    this.zipRef= React.createRef();
    this.descriptionRef=React.createRef();
  }

submitRequest(){
//e.preventDefault();
debugger;
console.log("form submitted");

let requestObject={

 "name":this.nameRef.current.value,
 "email":this.emailRef.current.value,
 "phone":this.phoneRef.current.value,
 "address":this.addressRef.current.value,
 "zip":this.zipRef.current.value,
"description":this.descriptionRef.current.value
}
console.log(requestObject);
}
    render() {
        return (
            <Card>

                <Card.Body>
                    <Card.Title>{this.props.serviceType} Service Request</Card.Title>
                    <Form onSubmit={()=>this.submitRequest()}>

                        <Form.Group  controlId="formBasicName">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control style={{width: '70%'}} ref={this.nameRef} type="text" placeholder="Enter name" required maxLength="50"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control style={{width: '70%'}} ref={this.emailRef} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone*</Form.Label>
                            <Form.Control style={{width: '70%'}} ref={this.phoneRef} type="text" placeholder="Enter phone number" required maxLength="10" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control style={{width: '70%',height:'150px'}} ref={this.addressRef} as="textarea" placeholder="Enter address" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control style={{width: '70%',height:'150px'}} ref={this.descriptionRef} as="textarea" placeholder="Enter service description" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control style={{width: '70%'}} ref={this.zipRef} type="text" placeholder="Enter zip code" />
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>
                    </Form>


                </Card.Body>
            </Card>
        )
    }
}

export default RequestForm
