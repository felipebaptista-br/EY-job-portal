import { createSlice } from "@reduxjs/toolkit";

const initialState = 'light';

const modeSlice = createSlice({
    name: 'mode',
    initialState
});

export default modeSlice.reducer;
