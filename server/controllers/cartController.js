import userModel from "../models/userModel.js";

//  add item for user
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ id: req.body.userId });
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
 console.log("Cart Add successfully", cartData);
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Cart added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove item for user
const removeForCart = async (req, res) => {
  try {
    let userData = await userModel.findone({ id: req.body.userId });
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Cart Remove successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//  fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({id:req.body.userId});
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
    console.log("Cart get successfully:", cartData);
    
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeForCart, getCart };
