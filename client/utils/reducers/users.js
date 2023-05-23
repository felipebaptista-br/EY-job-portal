import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    active: false,
    business: null,
    name: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state = payload
            return state
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
