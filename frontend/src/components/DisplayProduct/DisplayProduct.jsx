import React from "react";
import "./DisplayProduct.css";
import { Card } from 'react-bootstrap'

const DisplayProduct = ({soda}) => {
    return ( 
        <Card className="card">            
            <Card.Body>Product</Card.Body>
            <a href={`/soda/${soda.id}`}>
                <Card.Title as="div">
                    <strong>{soda.product}</strong>
                </Card.Title>
                </a>

                <Card>
                    <a href={`/soda/${soda.id}`}>
                        <Card.Img src={soda.image} className="images"></Card.Img>
                    </a>
                </Card>

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
        </Card>
     );
}
 
export default DisplayProduct;