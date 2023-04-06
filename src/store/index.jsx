import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/userSlice";
import adminSlice from "./slices/adminSlice";

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        admin: adminSlice.reducer,
    }
})

export default store