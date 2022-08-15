import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "../features/Books/BookSlice"

const store = configureStore({
    reducer:{
        bookReducer: bookReducer,
    },
});

export default store;