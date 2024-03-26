import React from 'react';
import './Navbar.css';
import { BsSearch } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () =>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
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
                <i className='search-icon'> <BsSearch /> </i>
            </div>
            <div className='mode-logo'>
                <i className='moon-mode' onClick={()=>{toggle_mode()}}>
                    <IoMoonSharp />
                </i>
            </div>

        </div>
    );
};

export default Navbar;