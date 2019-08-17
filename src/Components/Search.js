import React, { PureComponent } from 'react'
import { Form,Row,Col,Button} from 'react-bootstrap'
import axios from 'axios'
export default class Search extends PureComponent {

    constructor(props) {
        super(props);
        this.searchBy = React.createRef();
        this.value = React.createRef();
        this.state={
            success:false
        }
       
      }

      submitRequest(){
        //e.preventDefaultwc.();
        debugger;
        console.log("form submitted");
        let value=this.searchBy.current.value;
        if(this.value.current!=null){
        value=this.value.current.value;
        }
        let requestObject={
        
         "searchby":this.searchBy.current.value,
         "value":value
        
        }
        console.log(requestObject);
        axios.post("/hservice", requestObject )
              .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status===200 && res.data){
                  this.setState({
                      success:true
                  });
                  this.props.setSearchData(res.data);
                 // this.myRefSuccess.current.scrollTo(0, 0); 
                 window.scrollTo(0, 0); 
                 //this.myRefSuccess.elem.scrollTop=0;
                }
              })
          
        }

    render() {
        return (
            <div>
                 <Form onSubmit={(e)=>{e.preventDefault(); this.submitRequest()}} action={()=>{}}> 
        <Row>  
        <Col md="auto">Search By </Col>    
       
        <Col md="2"> 
     <Form.Group controlId="exampleForm.ControlSelect1" >
    
    <Form.Control as="select" placeholder="Search By" ref={this.searchBy}>
      {this.props.searchValues.map((val)=>{

      return <option value={val.toLowerCase()}>{val}</option>
      }
      )}
     
    </Form.Control>
    </Form.Group>
    </Col> 
    {this.props.notadmin &&
    <Col md="3">
    <Form.Group  controlId="formBasicName">
     <Form.Control  ref={this.value} type="text" placeholder="Search Value" required maxLength="50"/>
    </Form.Group>
    </Col>}
    <Col>
    <Button variant="primary" type="submit" >
      Search
     </Button>
    </Col>
    </Row>  </Form>
            </div>
        )
    }
}
