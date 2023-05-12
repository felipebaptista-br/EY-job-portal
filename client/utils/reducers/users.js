import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 21379,
    active: true,
    business: false,
    name: 'Felipe Baptista',
    email: 'felipe.baptista06@gmail.com',
};

const userSlice = createSlice({
    name: 'user',
    initialState
});

export default userSlice.reducer;
