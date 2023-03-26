import React from "react";
import { Card } from 'react-bootstrap'

const DisplayProduct = ({soda}) => {
    return ( 
        <Card>            
            <Card.Body>Product</Card.Body>
            <a href={`/soda/${soda.id}`}>
                <Card.Title as="div">
                    <strong>{soda.product}</strong>
                </Card.Title>

                <Card.Text as="div">
                    <div>
                        {soda.description}
                    </div>
                </Card.Text>

                <Card.Text as="h3">
                    <div>
                        price: $
                        {soda.price}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div>
                        size: (
                        {soda.size}
                        )
                    </div>
                </Card.Text>
                
                <Card.Text as="div">
                    <div>
                        flavor: 
                        {soda.flavor}
                        
                    </div>
                </Card.Text>
            </a>
        </Card>
     );
}
 
export default DisplayProduct;