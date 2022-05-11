import React from 'react';
import logo from '../logo.svg';
import Nav from './Nav';

const Header = ( props ) => (
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <img src={logo} className="header__logo" alt="logo" />
                <Nav {...props}></Nav>
            </div>
        </div>
    </header>
);

export default Header;