import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Card, Container, ListGroup } from "react-bootstrap";
import { Soda_products } from "../../pages/Product/sodas";
import "./ProductDetail.css";

const ProductDetail = (props) => {
    const product = Soda_products.find((soda) => soda.id)
    return ( 
        <Container>


        <Card className="Picture">            
            <Card>
                <Card.Img src={product.image} className="soda"></Card.Img>
            </Card>
        </Card>

        <Row className="table">
            <Col>
                <ListGroup variant="flush">

                    <ListGroup.Item>
                        <h3>{product.product}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item className="label">
                        Description: {product.description}
                    </ListGroup.Item>

                    <ListGroup.Item className="label">
                        Price: {product.price}
                    </ListGroup.Item>

                    <ListGroup.Item className="label">
                        Size: {product.size}
                    </ListGroup.Item>

                    <ListGroup.Item className="label">
                        Flavor: {product.flavor}
                    </ListGroup.Item>

                    <ListGroup.Item className="label">
                        <Button variant="danger" className="btm">Add to Cart</Button>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>

        <Button variant="primary" className="back">
            <Link to="/Product">back</Link>
        </Button>

        </Container>
     );
}
 
export default ProductDetail;
