import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/ProductContext"
import cartReducer from "./feature/CartContext.jsx"
import AuthReducer from "./feature/AuthContext.jsx"
const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
        auth:AuthReducer
    }
})
export default store;