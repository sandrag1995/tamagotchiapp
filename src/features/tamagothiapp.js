import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "pet",
    initialState: {
        data: null,
        error: ""
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
    }
})

export const {setData, setError} = userSlice.actions

export default userSlice.reducer;
