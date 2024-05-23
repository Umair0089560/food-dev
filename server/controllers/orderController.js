import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder = async (req, res) => {
    console.log("hit order");
    try {
        const { userId, items, address, amount } = req.body;

        // Validate required fields
        if (!userId || !items || items.length === 0 || !address || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new order object
        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address,
            status: "Food Processing",
            date: Date.now(),
            paymentMethod: "COD"
        });

        // Save order to database
        const savedOrder = await newOrder.save();
        console.log("new Order::::::", newOrder);

        // Update user order history
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.orders.push(savedOrder._id);
        await user.save();

        // Send success response
        res.status(201).json({ message: "Order placed successfully", order: savedOrder });

    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { placeOrder };
