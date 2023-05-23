import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/users";
import modeSlice from "../reducers/mode";

const store = configureStore({
    reducer: {
        user: userSlice,
        mode: modeSlice
    }
});

export default store;
