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
import Sliding from "./Carousel/sliding"
// import Sliding1 from "./Carousel/sliding1"
// import Sliding1 from "./Carousel/sliding1"
// import Slidewithcontrol from "./CarouselTypes/slidewithcontrol"
// import Slidewithindicator from "./CarouselTypes/slidewithindicator"
// import Slidewithcaption from "./CarouselTypes/slidewithcaption"
// import Slidewithfade from "./CarouselTypes/slidewithfade"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Owlcoder = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Owlcoder" />

          <Row>
            <Col  lg={12}>
              {/* <Card>
                <CardBody> */}
                  <center> <h1>OWL CODER</h1></center>
                  {/* <p className="card-title-desc">
                    Here’s a carousel with slides only. Note the presence of the{" "}
                    <code>.d-block</code> and <code>.img-fluid</code> on
                    carousel images to prevent browser default image alignment.
                  </p> */}
                  {/* <Imageslid/> */}
                  <Sliding/>
                  {/* <center><CardTitle className="h1"> Project Space</CardTitle></center>
                  <Sliding1 style={{ marginBottom: '60px' }}/> */}
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Owlcoder