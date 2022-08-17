import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBooks from '../features/Books/AddBooks';
import ShowBooks from '../features/Books/ShowBooks';
import EditBooks from '../features/Books/EditBooks'
import Navbar from "../layout/Navbar"
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Footer from "../layout/Footer";

const index = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<ShowBooks />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/edit-book" element={<EditBooks />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default index