import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
};

const userSlice = createSlice({
    name: 'candidato',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            localStorage.setItem('auth', JSON.stringify(payload))
            state = payload
            return state
        }
    }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
