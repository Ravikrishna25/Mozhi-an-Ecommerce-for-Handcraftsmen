import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productsReducer  from "./slices/productsSlice";
import productReducer  from "./slices/productSlice";
import authReducer  from "./slices/authSlice";
import cartReducer from "./slices/cartSlice"
import orderReducer from "./slices/orderSlice";
import wishReducer from "./slices/wishSlice"
import compReducer from "./slices/compSlice"
import catReducer from "./slices/categorySlice"
const reducer = combineReducers({
    productsState : productsReducer,
    productState : productReducer ,
    authState : authReducer,
    cartState: cartReducer,
    orderState: orderReducer,
    wishState: wishReducer,
    compareState: compReducer,
    categoryState: catReducer,
})

const store = configureStore({
    reducer,
    middleware:[thunk]   //thunk to play aynchronous
})

// store.dispatch({ type: "auth/initialize", payload: { isAuthenticated: false } });
export default store;