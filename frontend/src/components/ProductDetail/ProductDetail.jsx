import React from "react";
import { sodas } from "../../pages/Product/sodas";

const ProductDetail = (props) => {
    const product = sodas.find((soda) => soda.id)
    return ( 
        <div>
            {product.product}
        </div>
     );
}
 
export default ProductDetail;
