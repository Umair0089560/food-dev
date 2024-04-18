import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart mb-5">
      <div className="cart-items mb-5">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}Rs</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}Rs</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-5">
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
              <p>{100}Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{getTotalAmount() + 100}Rs</b>
            </div>
          </div>
          <button className="custom__button">PROCEED TO PAY</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promo code , Enter it here</p>
            <div className="login-popup-input">
              <input type="text" placeholder="Promo Code" />
              <button
                onClick={() => navigate("/order")}
                className="custom__button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
