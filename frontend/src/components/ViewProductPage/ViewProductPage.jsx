import React from "react";
import { Container } from "react-bootstrap";
import ProductDetail from "../ProductDetail/ProductDetail";

const ViewProductPage = (props) => {
    return (
        <Container>
            <h1>Product</h1>
            <ProductDetail id={props.id}/>
        </Container>
    );
}
 
export default ViewProductPage;