import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    reducers: {
        addAdminData(state, action) {
            let arr = []
            for (let i = 0; i < 10; i++) {
                let userCreate = `${chance.first()} ${chance.last()}`;
                state.push(userCreate)
            }

        },
    }
})

export default adminSlice
export const { addAdminData } = adminSlice.actions