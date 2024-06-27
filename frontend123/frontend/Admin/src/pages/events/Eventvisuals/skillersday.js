import React from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

// Carousel

import Sliding3 from "./Carousel/sliding3"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Skillersday = () => {
  return (
    <React.Fragment>
      <div className="page-content">
       
          <Breadcrumbs title="UI Elements" breadcrumbItem="Skillersday" />

          <Row>
            <Col lg={12}>
              {/* <Card>
                <CardBody> */}
                  <center> <h1>Skillers Day</h1></center>
                  {/* <center><CardTitle className="h1"> Skillers Day</CardTitle></center> */}
                  <Sliding3/>
                {/* </CardBody>
              </Card> */}
            </Col>
          </Row>
      </div>
    </React.Fragment>
  )
}

export default Skillersday