import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import Breadcrumbs from "../../components/Common/Breadcrumb";
const axiosAPI = axios.create(); // You can create an Axios instance without any specific configuration
    
const Owlcoder = () => {
    const [data, setData] = useState([]);
    let APP_URL = process.env.REACT_APP_DATABASEURL;
    useEffect(() => {
        axiosAPI.get('http://localhost:5000/getallevents')
            .then((res) => {
                console.log("Data received:", res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Email" breadcrumbItem="Read Email" />
                <Row>
                    <Col xs="12">
                        <div className="email-rightbar mb-3">
                            {/* Render your data here */}
                            {data.map((item, index) => (
                                <div key={index}>
                                    <p>{item.event}</p>
                                    <p><img src={`http://localhost:5000/images/${item.eventpic}`} alt="" width={200} /></p>
                                    <p>{item.price}</p>
                                </div> 
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default Owlcoder;
