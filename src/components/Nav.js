import React from "react";
import Button from '@mui/material/Button';

class Nav extends React.Component {
    handleClick = (e) => {
        this.props.goToPage( e.target.dataset.href );
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
        return (
            <nav className="header__nav nav">
                {this.props.pages.map( item => (
                    <this.NavItem key={item.page} text={item.text} page={item.page}/>
                ))}
            </nav>
        );
    }
}

export default Nav;