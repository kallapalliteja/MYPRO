import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

// Carousel

import Sliding4 from "./Carousel/sliding4"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Driveready = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Projectspace" />

          <Row>
            <Col lg={12}>
              {/* <Card>
                <CardBody> */}
                    <center> <h1>Drive Ready</h1></center>
                  {/* <center><CardTitle className="h1">Project Space</CardTitle></center> */}
                  <Sliding4/>
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Driveready