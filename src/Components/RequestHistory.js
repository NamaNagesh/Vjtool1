import React, { Component } from 'react'
import { Card,Accordion,Button,Row,Col } from 'react-bootstrap'
import Search from './Search';

export default class RequestHistory extends Component {
  constructor(props) {
    super(props);
   
    this.state={
        data:[],
        noData:false
    }
   
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
            <Card style={{ width: '100%',marginBottom:'10px'}}>
 
 <Card.Body style={{ padding:'2.25rem',paddingTop:'1.25rem'}}>
 
   {/* <Card.Text>
   Request History
   </Card.Text> */}
   <Search  notadmin={true}  searchValues={["Phone","Email","Name"]} setSearchData={this.setSearchData.bind(this)}></Search>
   <Accordion >
     {this.state.data.length>0 ? (
       this.state.data.map((serviceData,index)=>{
       return(
  <Card style={{ border:'2px solid rgba(0, 0, 0, 0.125)'}}>
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
                   <div>{serviceData.status ? serviceData.status : 'Pending'}</div>
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
                   <div>{serviceData.workerName}</div>
                 </div></Col>
           
                 <Col><div style={{ padding:'5px'}}>
                   <div><b>Worker Phone</b></div>
                   <div>{serviceData.workerPhone}</div>
                 </div></Col>     
                <Col><div style={{ padding:'5px'}}>
                   <div><b>Comments</b></div>
                   <div>{serviceData.comments ? serviceData.comments : 'NA'}</div>
                 </div></Col>
        </Row>
        </Card.Body>
    </Accordion.Collapse>
       </Card>)})
     ):(this.state.noData && <div>No request found with search value</div>)}
</Accordion>

   </Card.Body>
   </Card>
        )
    }
}
