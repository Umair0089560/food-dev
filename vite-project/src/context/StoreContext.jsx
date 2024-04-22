import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

const [cartItems,setCartItems] = useState({});

const url = "http://localhost:4000"
const [token,setToken] = useState("")
    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        } 
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                let iteminfo = food_list.find((product) =>product._id === item);
                totalAmount += iteminfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        url,
        token,
        setToken,
    }
    return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
    )
}

export default StoreContextProvider;