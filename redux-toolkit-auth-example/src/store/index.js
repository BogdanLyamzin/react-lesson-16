import {configureStore } from "@reduxjs/toolkit";

import {cartReducer, productsReducer} from "./reducer";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
});

export default store;
