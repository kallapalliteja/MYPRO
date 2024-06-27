import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  FormGroup,
  Label,
  Button,
} from "reactstrap"
import axios from "axios";


// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"


import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
const axiosAPI = axios.create();
let APP_URL = process.env.REACT_APP_DATABASEURL;
const Addevent = () => {
  const inpRow = [{ name: "", file: "" }]
  const [startDate, setstartDate] = useState(new Date())
  const[formdata,setFormdata]=useState({
    'eventname':'',
    'Startdate':"",
    'Noofdays':'',
    'Month':"",
    'Year':"",
    'Noofparticipants':""
    

})
// console.log(formdata);
// let backend_api="++"
const api=APP_URL+'addeventform';
function handleInputChange(event){
    const{name,value}=event.target;
    setFormdata((previousProps)=>({
        ...previousProps,
        [name]:value
    }))
}
const handlesubmit=(e)=>{
    e.preventDefault(); 
    axiosAPI.post(APP_URL+"addeventform",formdata).then((res)=>{
        console.log(res)  
        if(res.status===200){
            alert("success")
            window.location.href='/getevent';
        }
    })
    
}

  return (
    <>
      <div className="page-content">
        
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Create Task" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Add Event</CardTitle>
                  
                  <form className="outer-repeater" onSubmit={handlesubmit}>
                    <div data-repeater-list="outer-group" className="outer">
                      <div data-repeater-item className="outer">
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Event Name
                          </Label>
                          <Col lg="10">
                            <Input
                              id="eventname"
                              name="eventname"
                              type="text"
                              className="form-control"
                              placeholder="Enter Event Name..."
                              value={formdata.eventname} 
                              onChange={(e)=>setFormdata({...formdata,eventname:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="calender"
                            className="col-form-label col-lg-2"
                          >
                            StartDate
                          </Label>
                          <Col lg="10">
                            <Input
                              id="Startdate"
                              name="Startdate"
                              type="date"
                              className="form-control"
                              value={formdata.Startdate} 
                              onChange={(e)=>setFormdata({...formdata,Startdate:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            No of days
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="No.ofdays"
                              id="noofdays"
                              className="form-control"
                              value={formdata.Noofdays} 
                              onChange={(e)=>setFormdata({...formdata,Noofdays:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            month
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="Month"
                              id="month"
                              className="form-control"
                              value={formdata.Month} 
                              onChange={(e)=>setFormdata({...formdata,Month:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Year
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="Year"
                              id="year"
                              className="form-control"
                              value={formdata.Year} 
                              onChange={(e)=>setFormdata({...formdata,Year:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            No of participants
                          </Label>
                          <Col lg="10">
                            <Input
                              type="text"
                              name="No.of participants"
                              id="noofparticipants"
                              className="form-control"
                              value={formdata.Noofparticipants} 
                              onChange={(e)=>setFormdata({...formdata,Noofparticipants:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            submit
                          </Label>
                          <Col lg="10">
                            <Input
                              id="button"
                              name="submit"
                              type="submit"
                              className="form-control"
                            //   placeholder="choose a file..."
                            //   value={formdata.eventpic} 
                            //   onChange={(e)=>setFormdata({...formdata,eventpic:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        
                       
                      </div>
                    </div>
                  </form>
                  {/* <Row className="justify-content-end">
                    <Col lg="10">
                      <Button type="submit" color="primary">
                        Create Event
                      </Button>
                    </Col>
                  </Row> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Addevent
