import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../reducers/users";

const store = configureStore({
    reducer: {
        user: userSlice,
    }
});

export default store;
