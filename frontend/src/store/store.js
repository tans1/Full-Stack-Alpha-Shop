import cartReducer from "./slices/cartSlice";
import productDisplayReducer from "./slices/productDisplay";
import UserReducer from "./slices/userSlice";

import { configureStore } from "@reduxjs/toolkit";

// for persist
import storage  from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const reducer = combineReducers({
    cart : cartReducer,
    product : productDisplayReducer,
    user : UserReducer
})


const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer : persistedReducer,
})