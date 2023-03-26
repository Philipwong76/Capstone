// import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductPage.css";
import { sodas } from './sodas';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';

const ProductPage = () => {
//     const [sodas] = useState([]);
//   useEffect(() => {
//     getAllSodas();
//   }, []);

//   async function getAllSodas(){
//     const response = await axios.get('http://127.0.0.1:8000/api/soda_product/');
//     console.log(response.data)
//     return response
//   }
    return ( 
        <div className='feeds'>
            <h1>Products</h1>
            <Row>
                {sodas.map(soda => (
                    <Col key={soda.id}>
                        <DisplayProduct soda={soda} />
                    </Col>
                ))}
            </Row>
        </div>
     );
}
 
export default ProductPage;