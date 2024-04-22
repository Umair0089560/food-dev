import foodModel from "../models/foodModel.js";

import fs from "fs";


// add fod item 
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success:true, message: "Product add successfully"})
    }
     catch (error) {
        console.log(error)
        res.json({success:false, message: "Erorr"})
    }
}

// all foood  list 

const listFood = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({success:true, data: food})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Erorr"})
    }
}


// Update food item
const updateFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id);

        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        food.name = req.body.name || food.name;
        food.description = req.body.description || food.description;
        food.price = req.body.price || food.price;
        food.category = req.body.category || food.category;

        const updatedFood = await food.save();
        res.json({ success: true, data: updatedFood, message: "Food item updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error updating food item" });
    }
};


// remove food item 

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=> {});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Erorr"})
    }
}


export {addFood, listFood, removeFood, updateFood}