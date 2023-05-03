import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //ADD TO CART
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity++
                toast.info(`Increment ${action.payload.title} cart quantity`)
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //INCREMENT
        incrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity >= 1) {
                state.cartItems[itemIndex].cartQuantity++
                toast.info(`Increment ${action.payload.title} cart quantity`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //DESCREMENT
        descrementQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity--
                toast.info(`Descrement ${action.payload.title} cart quantity`)
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
                state.cartItems = nextCartItems;
                toast.error(`${action.payload.title} remove from cart`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        //REMOVE ITEM
        removeItem: (state, action) => {
            const removeItem = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartItems = removeItem;
            toast.error(`${action.payload.title} remove from cart`)
            localStorage.removeItem("cartItems");
        },

        //CLEAR CART
        clearCart: (state, action) => {
            state.cartItems = [],
                toast.error("Cart Cleared");
            localStorage.removeItem("cartItems");
        },

        //TOTAL
        getTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
});

export const {
    addToCart,
    incrementQuantity,
    descrementQuantity,
    removeItem,
    clearCart,
    getTotals
} = cartSlice.actions;

export default cartSlice.reducer;