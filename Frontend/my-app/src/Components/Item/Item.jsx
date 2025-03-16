import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Item = (props) => {
  console.log("Received image path:", props.image); 
  

  let new_image_path = props.image;

 

    // Handle images served from backend
    if (props.image && props.image.startsWith('http://localhost:4000')) {
      new_image_path = props.image.replace('http://localhost:4000', backendUrl);
    } 
    // Handle relative backend images (e.g., "/images/product_123.jpg")
    else if (props.image && props.image.startsWith('/images')) {
      new_image_path = `${backendUrl}${props.image}`;
    }
    // Handle images stored in public folder or React build assets (like "/static/media/")
    else if (props.image && props.image.startsWith('/static')) {
      new_image_path = props.image; // Leave it as is (React will handle it)
    }

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={new_image_path} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
