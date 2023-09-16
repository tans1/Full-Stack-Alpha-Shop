import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total : 0,
    amount : 0
}

const CartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCartAction(state, action){
            const {Id,image, price, title, category} = action.payload;
            if (state[Id] === undefined) {
                state[Id] = {
                    Id : Id,
                    quantity: 1,
                    imageUrl: image,
                    price: price,
                    title: title,
                    category: category
                };
                state.total += 1
                state.amount += price
            }
            else {
                state[Id].quantity += 1;
                state.total += 1
                state.amount += price
            }
            
        },

        removeFromCartAction(state, action){
            const {Id,price} = action.payload;
            state[Id].quantity -= 1
            state.total -= 1
            state.amount -= price
        }

        
    }
})

export const {addToCartAction, removeFromCartAction} = CartSlice.actions;
export default CartSlice.reducer;