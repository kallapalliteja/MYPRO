import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { MDBDataTable } from "mdbreact";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const axiosAPI = axios.create();

const Getevent = () => {
    const [events, setEventsdata] = useState([]);
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        axiosAPI.get("http://localhost:5000/getevent").then((response) => {
            console.log(response.data)
            setEventsdata(response.data);
        });
    }, []);

    const toggleModal = (imageURL) => {
        setImage(imageURL);
        setModal(!modal);
    };

    const handleDelete = (id) => {
        axiosAPI.delete(`http://localhost:5000/deleteevent/${id}`).then((res) => {
            console.log(res);
            alert("Data deleted successfully");
            setEventsdata(events.filter(event => event._id !== id));
        }).catch(error => {
            console.error('Error deleting event:', error);
            alert("Failed to delete event");
        });
    };

    const data = {
        columns: [
            {
                label: "Event Name",
                field: "eventname",
                sort: "asc",
                width: 150,
            },
            {
                label: "Start Date",
                field: "Startdate",
                sort: "asc",
                width: 270,
            },
            {
                label: "No of Days",
                field: "Noofdays",
                sort: "asc",
                width: 200,
            },
            {
                label: "Month",
                field: "Month",
                sort: "asc",
                width: 100,
            },
            {
                label: "Year",
                field: "Year",
                sort: "asc",
                width: 150,
            },
            {
                label: "No of Participants",
                field: "Noofparticipants",
                sort: "asc",
                width: 100,
            },
            {
                label: "Action",
                field: "edit",
                sort: "disabled",
                width: 100,
            },
            {
                label: "Action",
                field: "delete",
                sort: "disabled",
                width: 150,
            },
            {
                label: "Action",
                field: "view",
                sort: "disabled",
                width: 150,
            },
        ],
        rows: events.map((event) => ({
            ...event,
            edit: (
                <td>
                    <Link to={`/editform/${event._id}`}>
                        <Button style={{ background: "#3b5de7", margin: "2px", width: '50px', padding: "2px 4px", borderRadius: "5px", float:"right" }}>
                            Edit
                        </Button>
                    </Link>
                </td>
            ),
            delete: (
                <Button onClick={() => handleDelete(event._id)} style={{ background: "#ff715b", margin: "2px", padding: "2px 4px", borderRadius: "5px" }}>
                    Delete
                </Button>
            ),
            view: (
                <Button onClick={() => toggleModal(`http://localhost:5000/images/${event.eventpic}`)} style={{ background: "#3b5de7", margin: "2px", width: '50px', padding: "2px 4px", borderRadius: "5px" }}>
                    View
                </Button>
            ),
        })),
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Tables" breadcrumbItem="Tables" />
                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>
                                <CardTitle className="h4">Event List</CardTitle>
                                <Link to={`/eventform1`}>
                                    <Button color="primary">Add New Event</Button>
                                </Link>

                                <div className="table-rep-plugin">
                                    <div className="table-responsive mb-0" data-pattern="priority-columns">
                                        <MDBDataTable responsive striped bordered data={data} noBottomColumns />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>View Image</ModalHeader>
                <ModalBody>
                    <img src={image} alt="Event" style={{ width: '100%' }} />
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
};
 
export default Getevent;
