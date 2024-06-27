import React from "react"
import "./eventvisual.css"
import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  CardGroup,
  Button
} from "reactstrap"

// import images
// import img1 from "../../assets/images/small/img-1.jpg"
// import img2 from "../../assets/images/small/img-2.jpg"
// import img3 from "../../assets/images/small/img-3.jpg"
// import img4 from "../../assets/images/small/img-4.jpg"
// import img5 from "../../assets/images/small/img-5.jpg"
// import img6 from "../../assets/images/small/img-6.jpg"
// import img7 from "../../assets/images/small/img-7.jpg"
import owl1 from '../events/Eventvisuals/Images/owl1.jpg'
import ps1 from "../events/Eventvisuals/Images/ps1.jpg"
import app1 from "../events/Eventvisuals/Images/app1.jpg"
import dr1 from "../events/Eventvisuals/Images/dr1.png"
import gd1 from "../events/Eventvisuals/Images/gd1.jpeg"
import sd1 from "../events/Eventvisuals/Images/sd1.jpg"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Eventvisuals = props => {
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="UI Elements" breadcrumbItem="Cards" />

        <Row>
          <Col mg={6} lg={4}  >
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={owl1} style={{ height: "300px" }} alt="Card image cap" />
              <CardBody>
                <h4>OWL CODER</h4>
                <CardText style={{ height: "73px" }}>
                Owl coder is an Innovative Training Program of 60 days, was proven a successful initiative by our CEO which reflected on the placements of highest packages.
                  </CardText>
                <Link
                  to="/owlcoder"
                  className="btn btn-primary waves-effect waves-light"
                >
                  <center>More Info</center>
                  </Link>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} lg={4}>
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={ps1} style={{ height: "300px" }} alt="Card image cap" />
              <CardBody>
                <h4>PROJECT SPACE</h4>
                <CardText style={{ height: "73px" }}>
                Project space is a feature rich environment designed to encourage individuals to develop and showcase real-time problems and further find effective solutions that can help overcome them.
                  </CardText>
                <Link
                  to="/projectspace"
                  className="btn btn-primary waves-effect waves-light"
                >
                    More Info
                 
                  </Link>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} lg={4}>
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={gd1} style={{ height: "300px" }} alt="Card image cap" />
              <CardBody>
                <h4>GOLDEN DAY</h4>
                <CardText style={{ height: "73px" }}>
                The eagerly anticipated GOLDEN DAY, marking the 8th anniversary of Technical Hub. Stay Tuned for more updates.
                  </CardText>
                <Link
                  to="/goldenday"
                  className="btn btn-primary waves-effect waves-light"
                >
                  More Info
                  </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col mg={6} lg={4}>
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={sd1} style={{ height: "300px" }} alt="Card image cap" />
              <CardBody>
                <h4>SKILLERS DAY</h4>
                <CardText style={{ height: "73px" }}>
                The most exciting and the informative day SKILLERS DAY to our trainees has come to an end with high satisfaction of the parents with their ward's performance.
                  </CardText>
                <Link
                  to="/skillersday"
                  className="btn btn-primary waves-effect waves-light"
                >
                  More Info
                  </Link>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} lg={4}>
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={app1} style={{ height: "300px" }}alt="Card image cap" />
              <CardBody>
                {/* <CardTitle className="h4 mt-0">APP-A-THON</CardTitle> */}
                <h4>APP-A-THON</h4>
                <CardText style={{ height: "73px" }}>
                An exclusive 3 days of APP - A - THON is being organised to the trainees of FLUTTER in DRIVE READY at Technical Hub in order to get them equipped with the hands on experience.
                  </CardText>
                <Link
                  to="/appathon"
                  className="btn btn-primary waves-effect waves-light"
                >
                  More Info
                  </Link>
              </CardBody>
            </Card>
          </Col>
          <Col mg={6} lg={4}>
            <Card style={{height:"500px"}}>
              <CardImg top className="img-fluid" src={dr1} style={{ height: "300px" }} alt="Card image cap" />
              <CardBody>
                <h4>DRIVE READY</h4>
                <CardText style={{ height: "73px" }}>
                  Drive Ready is a program designed to help attendees familiarize themselves with a technology and coding language of their choice.
                  </CardText>
                <Link
                  to="/driveready"
                  className="btn btn-primary waves-effect waves-light"
                >
                  More Info
                  </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    </React.Fragment>
  )
}
export default Eventvisuals