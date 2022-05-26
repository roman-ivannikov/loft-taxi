import React from "react";
import PropTypes from 'prop-types';
import NavItem from "./NavItems";
import { withAuth } from "./AuthContext";

class Nav extends React.Component {
    render() {
        const { menuItems, currentPage, goToPage } = this.props;
        return (
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
    }
}

Nav.propTypes = {
    currentPage: PropTypes.string,
    goToPage: PropTypes.func,
    logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    pages: PropTypes.array
}

export const NavWithAuth = withAuth(Nav);