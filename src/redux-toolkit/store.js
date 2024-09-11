import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import TodoSlice from "./slice/TodoSlice";
import userListSlice from "./slice/UserListSlice";

export const store = configureStore({
    reducer : {
        product : ProductSlice,
        todos : TodoSlice,
        userList : userListSlice
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())