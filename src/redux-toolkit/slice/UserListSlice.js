import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserList = createAsyncThunk('fetchUserList', async() => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
})
let userListSlice = createSlice({
    name : "userList",
    initialState : {
        isLoading : false,
        data : [],
        isError : false
    },

    extraReducers : (builder) => {
        builder.addCase(fetchUserList.pending,(state,action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchUserList.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload
        });

        builder.addCase(fetchUserList.rejected,(state,action) => {
            console.log("Error", action.payload);
            state.isError = true
            
        })
    }
})

export default userListSlice.reducer;