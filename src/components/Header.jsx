import React from 'react';
import logo from '../logo.svg';
import { NavItem } from './NavItems';
import { withAuth } from "./AuthContext";
import PropTypes from 'prop-types';

const Header = ( props ) => (
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <img src={logo} className="header__logo" alt="logo" />
                <NavWithAuth {...props}></NavWithAuth>
            </div>
        </div>
    </header>
);

const Nav = ({ menuItems, currentPage, goToPage }) => (
    <nav className="header__nav nav">
        {
            menuItems.map( item => (
                <NavItem
                    key={ item.page }
                    text={ item.text }
                    page={ item.page }
                    color={ item.page === currentPage ? "secondary" : "primary"}
                    goToPage={ goToPage }
                />
            ))
        }
    </nav>
);

Nav.propTypes = {
    currentPage: PropTypes.string,
    goToPage: PropTypes.func,
    menuItems: PropTypes.array
}

const NavWithAuth = withAuth(Nav);

export default Header;