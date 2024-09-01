import React from 'react'
import { Link } from 'react-router-dom'


 const Navbar = ()=> {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h6>Home</h6>
            </Link>

             <Link to='/signup'>
                <h6>Signup</h6>
            </Link>

            <Link to='/login'>
                <h6>Login</h6>
            </Link>
        </div>
    </header>
  )
}
 export default Navbar;