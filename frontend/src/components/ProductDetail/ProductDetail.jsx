import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { Row, Col, Button, Card, Container, ListGroup, Form, ListGroupItem} from "react-bootstrap";
import { Soda_products } from "../../pages/Product/sodas";
import "./ProductDetail.css";

const ProductDetail = (props) => {
    const [sodas, setsodas] = useState(Soda_products);

      useEffect(() => {
        getAllSodas();
      }, []);

  async function getAllSodas(){
    const response = await axios.get('http://127.0.0.1:8000/api/soda_product/');
    console.log(response.data)
    setsodas(response.data)
    return response
  }

    let { id } = useParams();
    console.log(id)

    const product = sodas.find((soda) => soda.id == id)
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

                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col>
                                {product.stock > 0 ? 'IN STOCK' : 'OUT OF STOCK'}
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {product.stock > 0 && (
                        <ListGroup.Item>
                            <Col>QTY</Col>
                            <Col>
                                <Form.Control
                                    as="select"
                                    value="{QTY}"
                                    onChange={(e) => setsodas(e.target.value)}                                
                                >
                                    {
                                        [...Array(product.stock).keys()].map((x) =>(
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))
                                    }

                                </Form.Control>
                            </Col>
                        </ListGroup.Item>
                    )}

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
