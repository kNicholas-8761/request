import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";


const Product = ({ items, loading}) => {
  if (!loading) {
    return <div>Loading...</div>;
  } else {
    const renderedProducts = (item) => {
      return (
        <div>
          <Card style={{ maxWidth:"17rem" }} key={item.id} className="box">
            <Card.Img variant="top" src={item.product_image} className="h-50"  />
            <Card.Body >
              <Card.Title className="text-uppercase fs-6">{item.product_name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Card.Text className="fw-bold">
                {item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    };

    return <div className="grid container">{items.map(renderedProducts)}</div>;
  }
};
export default Product;
