import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Tables = () => {
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Tables" breadcrumbItem="Tables" />

        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="h4">Example </CardTitle>
                <p className="card-title-desc">
                  This is an experimental awesome solution for responsive
                  tables with complex data.
                  </p>

                <div className="table-rep-plugin">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <Table
                      id="tech-companies-1"
                      className="table table-striped table-bordered"
                    >
                      <Thead>
                        <Tr>
                          <Th>Event List</Th>
                          <Th data-priority="1">Event Name</Th>
                          <Th data-priority="3">StartDate</Th>
                          <Th data-priority="1">Noofdays</Th>
                          <Th data-priority="3">Month</Th>
                          <Th data-priority="3">Year</Th>
                          <Th data-priority="6">Noofparticipants</Th>
                        </Tr>
                      </Thead>
                      
                    </Table>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </React.Fragment>
  )
}

export default ResponsiveTables
