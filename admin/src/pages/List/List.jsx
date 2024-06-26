import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";

  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedCategory, setEditedCategory] = useState("");
  const [editedPrice, setEditedPrice] = useState("");

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  const handleEdit = (foodItem) => {
    setSelectedItem(foodItem);
    setEditedName(foodItem.name);
    setEditedCategory(foodItem.category);
    setEditedPrice(foodItem.price);
    setEditModalOpen(true);
  };

  const handleSaveChanges = async () => {
    console.log("before submit", selectedItem._id, editedName, editedCategory, editedPrice);
    const response = await axios.put(`${url}/api/food/update/${selectedItem._id}`, {
      id: selectedItem._id,
      name: editedName,
      category: editedCategory,
      price: editedPrice,
    });
    console.log("response", response)
    if (response.data.success) {
      toast.success(response.data.message);
      setEditModalOpen(false);
      fetchList();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
    <h2>All Product List</h2>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Edit</b>
        <b>Action</b>
      </div>
      {list.map((item, index) => {
        return (
          <div key={index} className="list-table-format dataa">
            <img src={`${url}/images/` + item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button className="custom__button" style={{ 
              width: '80px',
              cursor: 'pointer'
            }} onClick={() => handleEdit(item)}>Edit</button>
            <p onClick={() => removeFood(item._id)} className="curser">
              X
            </p>
          </div>
        );
      })}
    </div>

    {editModalOpen && (
      <div className="login-popup">
        <div className="login-popup-container">

        <h3>Edit Food Item</h3>
        <div className="login-popup-input">

        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
        <input
          type="text"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        />
        <input
          type="text" 
          value={editedPrice}
          onChange={(e) => setEditedPrice(e.target.value)}
        />
        </div>
        <button className="custom__button" style={{ 
          width: '120px',
          cursor: 'pointer'
        }} onClick={handleSaveChanges}>Save Changes</button>
        <button className="custom__button" style={{ 
          width: '100px',
          cursor: 'pointer'
        }} onClick={() => setEditModalOpen(false)}>Cancel</button>
        </div>
      </div>
    )}
  </div>

  );
};

export default List;