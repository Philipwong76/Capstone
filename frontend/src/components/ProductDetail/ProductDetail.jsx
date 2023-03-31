import React from "react";
import { sodas } from "../../pages/Product/sodas";

function ProductDetail({match}) {
    const product = sodas.filter((props) => props.id === match.id )
    return ( 
        <div>
            {product.product}
        </div>
     )
}
 
export default ProductDetail;