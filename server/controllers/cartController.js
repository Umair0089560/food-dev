import userModel from "../models/userModel.js";

//  add item for user
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ id: req.body.userId });
    
    // console.log(userData);
    let cartData =  userData?.cartData;
    if (!cartData[req.body.itemId]) {
      userData.cartData[req.body.itemId] = 1;
    } else {
      userData.cartData[req.body.itemId] += 1;
    }
    console.log(userData);
    
    await userModel.findOneAndUpdate(req.body.userId, userData );

    res.json({ success: true, message: "Cart added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove item for user
const removeForCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ id: req.body.userId });
    console.log(userData);
    let cartData = await userData.cartData;
    console.log(cartData);

    if (cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
    }
    await userModel.findOneAndUpdate(req.body.userId, userData );
    res.json({ success: true, message: "Cart Remove successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//  fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ id: req.body.userId });
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
    console.log("Cart get successfully:", cartData);
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeForCart, getCart };
