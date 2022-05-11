import React from 'react';
import logo from '../images/logo.png';
const Header = () => {
    return (
        <div className='Header'>
          <img src={logo} alt="" /> 
          <nav>
            <div className="side">
              <a href="/shop">Shop</a>
              <a href="/review">Order review</a>
              <a href="/inventor">Manage Inventory here</a>
              </div>
          </nav>
        </div>
    );
};

export default Header;