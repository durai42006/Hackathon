import React from 'react'
import './navbar.css'
import {BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
 
function navbar() {
  return (
    <div className='header'>
      <BrowserRouter>
        <ul>
          <li><Link className='LInk' to="/login" href='#'>Login</Link> </li>
          <li><Link className='LInk' to="/signup" href="#">Signup</Link> </li>
          <li><Link className='LInk' to="/Community" href="#">Community</Link> </li>
        </ul>
        </BrowserRouter>
      </div>
  )
}

export default navbar