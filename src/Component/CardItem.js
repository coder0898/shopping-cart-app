import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const CardItem = ({ item }) => (
    <div>
        <Card key={item.id} style={{ width: "20rem"}}>
            <Card.Img variant="top" src={item.imgsrc} alt="404" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>₹ {item.price.split(".")[0]}</span>
                    {item.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <Rating rating={item.ratings} />
                </Card.Subtitle>
                    <Button
                        variant="danger"
                    >
                        Remove from Cart
                    </Button>
                    <Button
                    >
                        {!item.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
            </Card.Body>
        </Card>
    </div>
)

export default CardItem
