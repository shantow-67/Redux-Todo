import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../state/todoSlice"

export default configureStore({
    reducer: {
        todo:todoReducer,
    }
})