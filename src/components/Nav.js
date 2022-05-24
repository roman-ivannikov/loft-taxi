import React from "react";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

class Nav extends React.Component {
    handleClick = (e) => {
        if (this.props.isLoggedIn && e.target.dataset.href === 'login') {
            this.props.logOut();
            this.props.goToPage( this.props.currentPage );
        } else {
            this.props.goToPage( e.target.dataset.href );
        }
    }

    NavItem = ({ page, text }) => {
        return (
            <Button
                className="nav__item"
                data-href={page}
                onClick={this.handleClick}
                color={page === this.props.currentPage ? "secondary" : "primary"}
            >{text}
            </Button>
        )
    }

    render() {
        this.NavItem.propTypes = {
            text: PropTypes.string,
            page: PropTypes.string
        }
        return (
            <nav className="header__nav nav">
                {this.props.pages.map( item => (
                    <this.NavItem key={item.page} text={item.text} page={item.page}/>
                ))}
            </nav>
        );
    }
}

Nav.propTypes = {
    currentPage: PropTypes.string,
    goToPage: PropTypes.func,
    pages: PropTypes.array
}

export default Nav;