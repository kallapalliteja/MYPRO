import React,{ useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Getevent=()=>{
    let [events,setEventsdata]=useState([]) //let data=[]
    useEffect(()=>{
        axios.get('http://localhost:5000/getevent').then((response)=>{
            setEventsdata(response.data.eventsdata);
        })
    },[]);
    const Deleteeve=(id)=>{
        console.log(id)
        axios.delete('http://localhost:5000/deleteuser/'+id)
        .then(res=>{console.log(res)
        alert("data deleted successfully")
        window.location.reload()
        })
    }
    const css = {
        background : "yellowgreen",
        margin :"2px",
        padding : "2px 4px",
        borderRadius : "20px",
        border : "2px solid yellowgreen"
    }
    const css1 = {
        background : "#ff3300",
        margin :"2px",
        padding : "2px 4px",
        borderRadius : "65px",
        border : "2px solid #ff3300"
    }
    // <div>
    // <br/>
    // <h1>Event List</h1>
    // <table align="center" border={1}>
    //     <thead>
    //     <tr>
    //     <th>Event Name</th>
    //     <th>Start Date</th>
    //     <th>No.Of.Days</th>
    //     <th>Month</th>
    //     <th>Year</th>
    //     <th>No.Of.Participants</th>
    //     <th colSpan={2}>Action</th>
    // </tr>
    //     </thead>
    //     <tbody>
    //     {events.map((ele,index,arr)=>{
    //     return(
    //         <tr key={index}>
    //             <td>{index+1}</td>
    //             <td>{ele.eventname}</td>
    //             <td>{ele.Startdate}</td>
    //             <td>{ele.Noofdays}</td>
    //             <td>{ele.Month}</td>
    //             <td>{ele.Year}</td>
    //             <td>{ele.Noofparticipants}</td>
    //             {/* <td><Link to={'/updatedata/${ele._id}'}><button>Edit</button></Link></td> */}
    //             <td><Link to={`/edit/${ele._id}`}><button  style={css}>Edit</button></Link></td>
    //             <td><button onClick={()=>Deleteeve(ele._id)} style={css1}>Delete</button></td>
    //         </tr>
    //     )
    // })}
    //     </tbody>
    // </table>
    // </div>


    return (
        <React.Fragment>
          <div className="page-content">
    
            <Breadcrumbs title="Tables" breadcrumbItem="Tables" />
    
            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Event List </CardTitle>
                    {/* <p className="card-title-desc">
                      This is an experimental awesome solution for responsive
                      tables with complex data.
                      </p> */}
    
                    <div className="table-rep-plugin">
                      <div
                        className="table-responsive mb-0"
                        data-pattern="priority-columns"
                      >
                        <Table
                          id="tech-companies-1"
                          className="table table-striped table-bordered"
                        >
                          <Thead>
                            <Tr>
                              <Th>Event List</Th>
                              <Th data-priority="1">Event Name</Th>
                              <Th data-priority="3">Start Date</Th>
                              <Th data-priority="1">No of days</Th>
                              <Th data-priority="3">Month</Th>
                              <Th data-priority="3">Year</Th>
                              <Th data-priority="6">No of participants</Th>
                            </Tr>
                          </Thead>
                        <Tbody>
                            {events.map((ele,index,arr)=>{
                            return(
                            
                                <Tr>
                                    <Td>{ele.eventname}</Td>
                                    <Td>{ele.Startdate}</Td>
                                    <Td>{ele.Noofdays}</Td> 
                                    <Td>{ele.Month}</Td>
                                    <Td>{ele.Year}</Td>
                                    <Td>{ele.Noofparticipants}</Td>
                                    
                                </Tr>
                            )
                            })}
                        </Tbody>
                          
                        </Table>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
    
        </React.Fragment>
    )
}
export default Getevent