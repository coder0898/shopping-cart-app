import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
                <div className="card" key={item.id}>
                <div className="cardImg">
                    <img src={item.imgsrc} alt='404' />
                </div>
                <div className="cardHeader">
                    <h3>{item.title}</h3>
                    <p>Price: Rs {item.price}</p>
                </div>
                <div className="button-box">
                {/* <Link to={`/product/:${item.id}`}>
                <button  >View</button>
                </Link> */}
                </div>
            </div>
          
  )
}

export default Card
