import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData= {
      address:data,
      items: orderItems,
      amount:  getTotalAmount() + 100,
    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers:{token}})
    if (response.data.success) {
      console.log(response.data.orderData)
    }
    window.location.reload();
  };
  return (
    <form className="place-order mb-5" onSubmit={placeOrder}>
      <div className="place-order-left login-popup-input">
        <p className="title">Delivery Information</p>
        <div className="multi-fields d-flex gap-3">
          <input
            required
            type="text"
            name="firstName"
            placeholder="First name"
            value={data.firstName}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="lastName"
            placeholder="Last name"
            value={data.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="email"
          name="email"
          placeholder="Email address"
          value={data.email}
          onChange={onChangeHandler}
        />
        <input
          required
          type="text"
          name="street"
          placeholder="Street"
          value={data.street}
          onChange={onChangeHandler}
        />
        <div className="multi-fields d-flex gap-3">
          <input
            required
            type="text"
            name="city"
            placeholder="City"
            value={data.city}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="state"
            placeholder="State"
            value={data.state}
            onChange={onChangeHandler}
          />
        </div>
        <div className="multi-fields d-flex gap-3">
          <input
            required
            type="text"
            name="zipCode"
            placeholder="Zip code"
            value={data.zipCode}
            onChange={onChangeHandler}
          />
          <input
            required
            type="text"
            name="country"
            placeholder="Country"
            value={data.country}
            onChange={onChangeHandler}
          />
        </div>
        <input
          required
          type="text"
          name="phone"
          placeholder="Phone"
          value={data.phone}
          onChange={onChangeHandler}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalAmount()} Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalAmount() === 0 ? 0 : 100} Rs</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 100} Rs</b>
            </div>
          </div>
          <button type="submit" className="custom__button">
            PROCEED TO PAY
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;