import React from "react";
import { Container } from "react-bootstrap";
import ProductDetail from "../ProductDetail/ProductDetail";

const ViewProductPage = () => {
    return (
        <Container>
            <h1>Product</h1>
            <ProductDetail/>
        </Container>
    );
}
 
export default ViewProductPage;