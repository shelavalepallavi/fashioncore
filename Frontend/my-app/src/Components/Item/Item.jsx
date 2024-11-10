import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const current_backend_domain = 'https://fashioncore-backend.onrender.com';

const Item = (props) => {


  let db_image_path = props.image;
  db_image_path = db_image_path.substr(21);
  let new_image_path = current_backend_domain + db_image_path;

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={new_image_path} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new"> 
        ${props.new_price} 
        </div>
        <div className="item-price-old"> 
        ${props.old_price}  
        </div>
      </div>
    </div>
  )
}
 
export default Item
