import React, { PureComponent } from 'react'
import {Form,Button,Card} from 'react-bootstrap'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { Mycontext } from './AdminProvider';

export default class AdminLogin extends PureComponent {


    constructor(props) {
        super(props);
        this.userId = React.createRef();
        this.pwd = React.createRef();
       
      }

      submitRequest(){
        //e.preventDefault();
        debugger;
        console.log("form submitted");
        
        let requestObject={
        
         "userId":this.userId.current.value,
         "pwd":this.pwd.current.value
         
        }
        console.log(requestObject);
        axios.post("/adminL", requestObject )
              .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status===200 && res.data){
                  if(res.data){
                    let { history } = this.props;
                    history.push({
                     pathname: '/services',
                    
                    });
                   this.context.setAdmin(true);
                  }
                console.log("admin login success");
                }
              })
          
        }



    render() {
        return (
            <div>
                 <Card style={{ width: '50%', position:'absolute',top:'20%', left:'10%',right:'10%', minWidth:'300px'  }}>
  
  <Card.Body>
      <Card.Title>Admin Login</Card.Title>
                <Form onSubmit={(e)=>{e.preventDefault(); this.submitRequest()}} action={()=>{}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>User Id</Form.Label>
    <Form.Control ref={this.userId}  type="text" placeholder="Enter User Id" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={this.pwd} type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
            </div>
        )
    }
}
AdminLogin.contextType = Mycontext;