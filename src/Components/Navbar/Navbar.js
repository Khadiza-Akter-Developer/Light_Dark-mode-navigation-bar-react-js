import React from 'react';
import './Navbar.css';
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className='navbar'>
            <img src='' alt='' className='logo' />
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <div className='search-container'>
                <input type='text' placeholder='Search' />
                {/* Replaced <i> with <div> and used conditional rendering */}
                <div className='search-icon'>
                    {theme === 'light' ? <BsSearch /> : <FaSearch />}
                </div>
            </div>
            <div className='mode-logo'>
                <div className='moon-mode' onClick={toggle_mode}>
                    <IoMoonSharp />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
