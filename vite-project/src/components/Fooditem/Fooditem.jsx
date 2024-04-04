import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Fooditem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
    return (
    <div className='food-item'>
        <div className="card">
  <div className="favorite-icon">❤️</div>
  <img src={image} alt="Krunch Burger" className="card-img" />
  
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
   
    <p className="card-text">
      {description}
    </p>
    <h6 className="card-price">Rs {price}</h6>
   
    {!cartItems[id]
    ?<img className='add' onClick={() =>addToCart(id)} src={assets.add_icon_white} alt="" />
    : <div className="food-item-counter">
        <img onClick={() =>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
        <p className='pt-3'>{cartItems[id]}</p>
        <img onClick={() =>addToCart(id)} src={assets.add_icon_green} alt="" />
    </div>
  }
  </div>
</div>

    </div>
  )
}

export default Fooditem
