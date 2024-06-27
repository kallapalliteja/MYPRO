import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

// Carousel

import Sliding2 from "./Carousel/sliding2"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Goldenday = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Goldenday" />

          <Row>
            <Col lg={12}>
              {/* <Card>
                <CardBody> */}
                  <center> <h1>Golden Day</h1></center>
                  {/* <center><CardTitle className="h1"> Golden Day</CardTitle></center> */}
                  <Sliding2/>
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Goldenday