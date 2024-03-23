import React from 'react';
import './Navbar.css';
import { BsSearch } from "react-icons/bs";


const Navbar = () => {
    return (
        <div className='navbar'>
           <img src='' alt='' className='logo'/>
           <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
           </ul>

           <div className='search-container'>
            <input type='text' placeholder='Search'/>
            <i> <BsSearch /> </i>
           </div>
        </div>
    );
};

export default Navbar;