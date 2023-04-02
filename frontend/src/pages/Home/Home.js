import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Soda3D from "../../components/Soda3D/Soda3D";
import "./Home.css";

function Home() {

    return ( 
        <div>
            <h2 className="title"> FRESH COLA FOR ALL </h2>

            <h1 className="title2">SODAPOP indtroduces our main product of the year</h1>

        <Row className="box">
            <Col>
                <Link to="/Product/1" className="redsoda">POP COLA</Link>
                <Soda3D/>
            </Col>
        </Row>

        </div>
     );
}
 
export default Home;