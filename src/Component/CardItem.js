import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const CardItem = ({ item }) => (
    <div>
        <Card key={item.id}>
            <Card.Img variant="top" src={item.image} alt="404" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>₹ {item.price.split(".")[0]}</span>
                    {item.fastDelivery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 days delivery</div>
                    )}
                    <Rating rating={item.ratings} />
                </Card.Subtitle>
                {/* {cart.some((p) => p.id === item.id) ? (
                    <Button
                        variant="danger"
                    >
                        Remove from Cart
                    </Button>
                ) : (
                    <Button
                    >
                        {!item.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                )} */}
            </Card.Body>
        </Card>
    </div>
)

export default CardItem
