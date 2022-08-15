import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBooks from '../features/Books/AddBooks';
import ShowBooks from '../features/Books/ShowBooks';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/show-books' element={<ShowBooks />} />
        <Route path ='/add-books' element={<AddBooks />} />
        <Route path='/*' element={<Error />} />
    </Routes>

    </BrowserRouter>
  )
}

export default index