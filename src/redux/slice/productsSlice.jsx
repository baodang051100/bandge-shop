import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}

const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        //UPDATE PRODUCT
        updateProduct: (state, action) => {
            const itemIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
        }
    }
})

export const {
    updateProduct
} = productsSlice.actions;

export default productsSlice.reducer