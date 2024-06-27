import React from "react"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import chartJs
import BarChart from "../AllCharts/chartjs/barchart"

const ChartjsChart = () => {
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Charts" breadcrumbItem="Chartjs charts" />

          <Col lg={6}>
            <Card>
              <CardBody>
                <CardTitle className="h4 mb-4">Bar Chart</CardTitle>
                <Row className="text-center">
                  <div className="col-4">
                    <h5 className="mb-0">2541</h5>
                    <p className="text-muted text-truncate">Activated</p>
                  </div>
                  <div className="col-4">
                    <h5 className="mb-0">84845</h5>
                    <p className="text-muted text-truncate">Pending</p>
                  </div>
                  <div className="col-4">
                    <h5 className="mb-0">12001</h5>
                    <p className="text-muted text-truncate">Deactivated</p>
                  </div>
                </Row>
                <BarChart />
              </CardBody>
            </Card>
          </Col>
          </div>
    </React.Fragment>
  )
}

export default ChartjsChart
