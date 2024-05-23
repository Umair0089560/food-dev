import userModel from "../models/userModel.js";

//  add item for user
const addToCart = async (req, res) => {
  try {
    const userId = req.body.userId; // This should now be set by the authMiddleware
    const itemId = req.body.itemId;

    let userData = await userModel.findById(userId);
    
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 1;
    } else {
      userData.cartData[itemId] += 1;
    }

    await userData.save(); // Save the updated user data
    console.log(userData)
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true }
    );

    res.json({ success: true, message: 'Cart add successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


// remove item for user

const removeForCart = async (req, res) => {
  try {
    const userId = req.body.userId; // This should now be set by the authMiddleware
    const itemId = req.body.itemId;

    let userData = await userModel.findById(userId);
    
    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (userData.cartData[itemId]) {
      userData.cartData[itemId] -= 1;
    } 

    await userData.save(); // Save the updated user data
    console.log(userData)
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { cartData: userData.cartData },
      { new: true }
    );

    res.json({ success: true, message: 'Cart remove successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

//  fetch user cart data
const getCart = async (req, res) => {
  try {
    const userId = req.body.userId; // This should now be set by the authMiddleware

    console.log(`Received userId: ${userId}`);
    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    console.log(`User found: ${userData.name}`);
    console.log(`User cart data: ${JSON.stringify(userData.cartData)}`);

    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }                                     
};



export { addToCart, removeForCart, getCart };
