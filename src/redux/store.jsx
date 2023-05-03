import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cardReducer, { getTotals } from "./slice/cardSlice";
import productsReducer from "./slice/productsSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cardReducer,
    products: productsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

store.dispatch(getTotals());

export default store;
