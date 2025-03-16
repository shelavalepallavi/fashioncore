import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Item = (props) => {
  console.log("Received image path:", props.image); 
  

  let new_image_path = props.image;

 

 
    // if (props.image && props.image.startsWith('http://localhost:4000')) {
    //   new_image_path = props.image.replace('http://localhost:4000', backendUrl);
    // } 
    
    // else if (props.image && props.image.startsWith('/images')) {
    //   new_image_path = `${backendUrl}${props.image}`;
    // }
    // else if (props.image && props.image.startsWith('/static')) {
    //   new_image_path = props.image; 
    // }

    if (!props.image) {
      new_image_path = '/static/default-image.png'; // Fallback image
    }
    // Handle backend images (e.g., "/images/product_123.jpg")
    else if (props.image.startsWith('/images')) {
      new_image_path = `${backendUrl}${props.image}`;
    }
    // Ensure backend-served images from localhost are fixed
    else if (props.image.startsWith('http://localhost:4000')) {
      new_image_path = props.image.replace('http://localhost:4000', backendUrl);
    }
    // Ensure all backend-served images use HTTPS to avoid mixed-content errors
    else if (props.image.startsWith('http://') && !props.image.startsWith('/static')) {
      new_image_path = props.image.replace('http://', 'https://');
    }
    // Do NOT modify images stored in /static/... or external CDN links
    else {
      new_image_path = props.image;
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
