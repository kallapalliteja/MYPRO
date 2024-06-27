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
    'event':'',
    'price':'',
    'eventpic':''
})
// console.log(formdata);
// let backend_api="++"
const api=APP_URL+'addevent';
function handleInputChange(event){
    const{name,value}=event.target;
    setFormdata((previousProps)=>({
        ...previousProps,
        [name]:value
    }))
}
const handlesubmit=(e)=>{
    const Inputfields=new FormData()
    Inputfields.append('event',formdata.event)
    Inputfields.append('price',formdata.price) 
    Inputfields.append('myfile',formdata.eventpic)
    console.log("ddd")
    e.preventDefault(); 
    axiosAPI.post(APP_URL+"addevent",Inputfields).then((res)=>{
        console.log(res)
        if(res.status===200){
            alert("success")
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
                              value={formdata.event} 
                              onChange={(e)=>setFormdata({...formdata,event:e.target.value})}
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
                              id="price"
                              name="price"
                              type="text"
                              className="form-control"
                              placeholder="Enter price..."
                              value={formdata.price} 
                              onChange={(e)=>setFormdata({...formdata,price:e.target.value})}
                            />
                          </Col>
                        </FormGroup>
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="taskname"
                            className="col-form-label col-lg-2"
                          >
                            Image
                          </Label>
                          <Col lg="10">
                            <Input
                              type="file"
                              name="myfile"
                              id="myfile"
                              className="form-control"
                              onChange={(e)=>setFormdata({...formdata,eventpic:e.target.files[0]})}
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
