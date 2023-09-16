import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homecategory : "All",
    cartcategory : "All",
    size : ""
}

const ProductSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        changeProductCategoryAction(state, action) {
            const category = action.payload;
            state.homecategory = category;
            
        },

        changeCartCategoryAction(state, action) {
            const category = action.payload;
            state.cartcategory = category;
        },


        changeSizeAction(state, action) {
            const siz  = action.payload;
            state.size = siz;
        }

        
    }
})

export const {changeProductCategoryAction, changeCartCategoryAction,changeSizeAction} = ProductSlice.actions;
export default ProductSlice.reducer;