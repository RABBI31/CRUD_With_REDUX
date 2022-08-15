import { createSlice } from "@reduxjs/toolkit";

const initiastate = {
    books:[
        {
        id : 1,
        title : "React is the best",
        author : "Unknown Person",

    },
    {
        id : 2,
        title : "React is the best",
        author : "Unknown Person",

    },

]
};

export const bookSlice = createSlice({
    name: "books",
    initialState:initiastate,
    reducers:{
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
          },
    }
})

export const {showBooks, addBook} = bookSlice.actions

export default bookSlice.reducer
