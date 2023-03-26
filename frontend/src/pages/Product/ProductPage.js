// import React, { useState, useEffect } from 'react'
import "./ProductPage.css";
import { sodas } from './sodas';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
// import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';

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
        <div>
            <h1>Products</h1>
            <div className='feeds'>
                {sodas.map(soda => (
                    <div key={soda.id}>
                        <DisplayProduct soda={soda} />
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default ProductPage;