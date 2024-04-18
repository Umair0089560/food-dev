import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalAmount} = useContext(StoreContext)
  return (
    <form className='place-order mb-5'>
      <div className="place-order-left login-popup-input">
        <p className="title">Delivery Information</p>
        <div className="multi-fields d-flex gap-3">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields d-flex gap-3">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields d-flex gap-3">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()}Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalAmount()===0?0:100}Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{getTotalAmount()===0?0:getTotalAmount() + 100}Rs</b>
            </div>
          </div>
          <button className="custom__button">PROCEED TO PAY</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
