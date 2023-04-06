import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        // add user
        addUser(state, action) {
            state.push(action.payload)
        },
        // remove user
        removeUser(state, action) {
            let userIndex = state.indexOf(action.payload)
            state.splice(userIndex, 1)
        },
        // clear user
        clearAllUsers(state, action) {
            return []
        }
    },
    extraReducers: ((builder) => {
        builder.addCase(usersSlice.actions.clearAllUsers, () => {
            return []
        })
    })
})

export default usersSlice;
export const { addUser, removeUser, clearAllUsers } = usersSlice.actions;
