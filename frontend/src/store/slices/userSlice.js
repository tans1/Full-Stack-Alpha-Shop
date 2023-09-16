import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token : ""
}

const UserSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        changeToken(state, action){
            const {token} = action.payload;
           state.token = token;
        }
    }
})

export const {changeToken } = UserSlice.actions;
export default UserSlice.reducer;