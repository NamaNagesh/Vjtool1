import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search';
import { Card,Accordion,Button,Row,Col,Form } from 'react-bootstrap'

export default class RequestDetails extends Component {
state={
    data:[],
    noData:false
};
componentDidMount(){
     console.log("did mount");
//     let requestData={"status":this.props.status};
// axios.post("/serviceRequestsA",requestData).then(res=>{
//     console.log(res.data)
//     this.setState({data:res.data});
//      if(res.data.count=="0"){
//         this.setState({noData:true});
//      }
// });

}

changingData(e,index){
console.log(e.target.value);
console.log(e.target.name);
console.log(index);
this.state.data[index][e.target.name]=e.target.value;
this.setState({data:this.state.data})
}

updateData(){
  console.log(this.state.data);
  let requestData={"data":this.state.data}
  axios.post("/serviceRequestsA",requestData).then(res=>{
         console.log(res);
     });

}

setSearchData(searchData){

    console.log("history::");
    console.log(searchData);
    this.setState({
      data:searchData.data
    });
     if(searchData.count==0){
        this.setState({
            noData:true
          });
     }
  }

    render() {
        return (
            <div>
                <Search notadmin={false} searchValues={["Pending","In Progress","Completed"]} setSearchData={this.setSearchData.bind(this)}></Search>
                {this.state.data.length>0 ? (
                    
                    <Accordion >
     {
       this.state.data.map((serviceData,index)=>{
       return(
  <Card key={index} style={{ border:'2px solid rgba(0, 0, 0, 0.125)'}}>
    <Card.Header style={{ borderBottom:'0px'}}>
        <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>RequestId</b></div>
                   <div>{serviceData.request_id}</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Service type</b></div>
                   <div>{serviceData.service_type}</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Status</b></div>
                   <div>
                   <Form.Group controlId="exampleForm.ControlSelect1" >
    
    <Form.Control as="select" name="status" onChange={(e)=>{this.changingData(e,index)}} placeholder="Search By" value={serviceData.status ? serviceData.status : 'pending'} >
      

     <option value="pending">Pending</option>
     <option value="in progress">In Progress</option>
     <option value="completed">Completed</option>
     
    </Form.Control>
    </Form.Group>
                  </div>
                 </div></Col>
        </Row>
        
      <Accordion.Toggle as={Button} variant="primary" eventKey={(2*index)}>
      More Details
      </Accordion.Toggle>

      <Accordion.Toggle as={Button} variant="primary" eventKey={(2*index)+1} style={{marginLeft:"5px"}}>
      Worker Details
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={(2*index)}>
      <Card.Body> <Row>
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Name</b></div>
                   <div>{serviceData.name}</div>
                 </div></Col>
           
                 <Col><div style={{ padding:'5px'}}>
                   <div><b>Phone</b></div>
                   <div>{serviceData.phone}</div>
                 </div></Col>     
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Email</b></div>
                   <div>{serviceData.email ? serviceData.email : 'NA'}</div>
                 </div></Col>
        </Row>
        <Row>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Description</b></div>
                   <div>{serviceData.description ? serviceData.description : 'NA'}</div>
                 </div></Col>
            <Col><div style={{ padding:'5px'}}>
                   <div><b>Comments</b></div>
                   <div>{serviceData.comments ? serviceData.comments : 'NA'}</div>
                 </div></Col>
             <Col><div style={{ padding:'5px'}}>
                   <div><b>Address</b></div>
                   <div>{serviceData.address ? serviceData.address : 'NA'}</div>
                 </div></Col>
        </Row></Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse eventKey={(2*index)+1}>
      <Card.Body> <Row>
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Worker Name</b></div>
                   <div> <Form.Group  controlId="formBasicName">
                            <Form.Control name="workerName" onChange={(e)=>{this.changingData(e,index)}} style={{width: '80%'}} value={serviceData.workerName ? serviceData.workerName :""} type="text" placeholder="Enter name"  maxLength="50"/>
                        </Form.Group></div>
                 </div></Col>
           
                 <Col><div style={{ padding:'5px'}}>
                   <div><b>Worker Phone</b></div>
                   <div><Form.Group  controlId="formBasicPhone">
                            <Form.Control name="workerPhone" onChange={(e)=>{this.changingData(e,index)}}  style={{width: '80%'}} value={serviceData.workerPhone ? serviceData.workerPhone:""} type="text" placeholder="Enter phone"  maxLength="50"/>
                        </Form.Group></div>
                 </div></Col>     
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Comments</b></div>
                   <div><Form.Group  controlId="formBasicComments">
                            <Form.Control name="comments" onChange={(e)=>{this.changingData(e,index)}} style={{width: '80%'}} value={serviceData.comments ? serviceData.comments:""} type="text" placeholder="Enter comments"  maxLength="50"/>
                        </Form.Group></div>
                 </div></Col>
        </Row>
        </Card.Body>
    </Accordion.Collapse>
       </Card>)})
     }
</Accordion>

                ): this.state.noData ? ("No data to display "): (" ")}
                 <Button onClick={()=>{this.updateData()}} style={{margin:"10px",width:"150px"}} variant="primary" type="button" >
                            Submit
                  </Button>
            </div>
        )
    }
}
