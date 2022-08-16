import { createSlice } from '@reduxjs/toolkit'

const initiastate = {
  books: [
    {
      id: 1,
      title: 'React is the best',
      author: 'Unknown Person',
    },
    {
      id: 2,
      title: 'React is the best',
      author: 'Unknown Person',
    },
  ],
}

export const bookSlice = createSlice({
  name: 'books',
  initialState: initiastate,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    updateBook: (state, action) => {
        const { id, title, author } = action.payload;
        const isBookExist = state.books.filter((book) => book.id === id);
        if (isBookExist) {
          isBookExist[0].title = title;
          isBookExist[0].author = author;
        }
      },
    deleteBook: (state, action) => {
      const id = action.payload
      state.books = state.books.filter((book) => book.id !== id)
    },
  },
})

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions

export default bookSlice.reducer
