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
const Imageform = () => {
  const inpRow = [{ name: "", file: "" }]
  const [startDate, setstartDate] = useState(new Date())
  const[imagedata,setImagedata]=useState({
    'Month':"",
    'Year':"",
    'eventpic':""
})
// console.log(formdata);
// let backend_api="++"
const api=APP_URL+'eventform1';
function handleInputChange(event){
    const{name,value}=event.target;
    setImagedata((previousProps)=>({
        ...previousProps,
        [name]:value
    }))
}
const handlesubmit=(e)=>{
    const Inputfields=new FormData()
    Inputfields.append('Month',imagedata.Month) 
    Inputfields.append('Year',imagedata.Year)
    Inputfields.append('myfile',imagedata.eventpic)
    console.log("ddd")
    e.preventDefault();
    axiosAPI.post("http://localhost:5000/imageform", Inputfields)
  .then((res) => {
    console.log(res);
    if (res.status === 200) {
      alert("success");
    }
  })
  .catch((error) => {
    console.error('Error submitting form:', error);
  });
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
    htmlFor="month"
    className="col-form-label col-lg-2"
  >
    Month
  </Label>
  <Col lg="10">
    <Input
      type="select"
      name="Month"
      id="month"
      className="form-control"
      value={imagedata.Month} 
      onChange={(e)=>setImagedata({...imagedata,Month:e.target.value})}
      style={{ width: "50%" }}
    >
      <option value="">Select Month</option>
      <option value="January">January</option>
      <option value="February">February</option>
      <option value="March">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="December">December</option>
    </Input>
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
                              value={imagedata.Year} 
                              onChange={(e)=>setImagedata({...imagedata,Year:e.target.value})}
                              style={{ width: "50%" }}
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
                              onChange={(e)=>setImagedata({...imagedata,eventpic:e.target.files[0]})}
                              style={{ width: "50%" }}
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
                            <Button type="submit" color="primary">
                              Submit
                            </Button>
                          </Col>
                        </FormGroup>      
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </>
  )
}

export default Imageform
