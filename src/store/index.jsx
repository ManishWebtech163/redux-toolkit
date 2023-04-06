import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    }
})

export default store