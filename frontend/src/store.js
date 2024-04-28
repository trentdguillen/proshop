import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import  cartSliceReducer  from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';
import saveForLaterReducer from './slices/saveForLaterSlice';

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
        auth: authSliceReducer,
        saveForLater: saveForLaterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export default store;

