import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />

            <div className='navitem'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Order">Order</a></li>
                <li><a href="/About">About</a></li>

            </div>
        </div>
    );
};

export default Header;