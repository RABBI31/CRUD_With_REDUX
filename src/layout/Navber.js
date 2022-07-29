import React from 'react'
import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="show-books"
            
          >
            Show Books
          </NavLink>
        </li>
        <li>
          <NavLink to="add-books">
            Add-Books
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navber