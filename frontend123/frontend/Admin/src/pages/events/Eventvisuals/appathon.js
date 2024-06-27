import React from "react"

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

// Carousel
//import Imageslid from "./Carousel/imageslid"
import Sliding5 from "./Carousel/sliding5"
// import Sliding1 from "./Carousel/sliding1"
// import Sliding1 from "./Carousel/sliding1"
// import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
// import Slidewithindicator from "./CarouselTypes/slidewithindicator"
// import Slidewithcaption from "./CarouselTypes/slidewithcaption"
// import Slidewithfade from "./CarouselTypes/slidewithfade"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Appathon = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Appathon" />

          <Row>
            <Col lg={12}>
              {/* <Card>
                <CardBody> */}
                    <center> <h1>App-A-Thon</h1></center>
                  
                  <Sliding5/>
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Appathon