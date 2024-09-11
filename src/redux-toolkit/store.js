import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";
import TodoSlice from "./slice/TodoSlice";

export const store = configureStore({
    reducer : {
        product : ProductSlice,
        todos : TodoSlice
    }
})