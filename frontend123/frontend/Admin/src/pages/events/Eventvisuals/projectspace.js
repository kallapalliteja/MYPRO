import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

// Carousel

import Sliding1 from "./Carousel/sliding1"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Projectspace = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Projectspace" />

          <Row>
            <Col lg={12}>
              {/* <Card>
                <CardBody> */}
                  <center> <h1>Project Space</h1></center>
                  {/* <center><CardTitle className="h1"> Project Space</CardTitle></center> */}
                  <Sliding1/>
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Projectspace