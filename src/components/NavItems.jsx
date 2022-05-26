import React from "react";
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

class NavItem extends React.Component {
    handleClick = (e) => {
        const target = e.target.dataset.href;
        this.props.goToPage(target);
    }

    render() {
        const { text, page, color } = this.props;

        return (
            <Button
                className="nav__item"
                data-href={ page }
                color={ color }
                onClick={ this.handleClick }
            >
                { text }
            </Button>
        );
    }
}

NavItem.propTypes = {
    text: PropTypes.string,
    page: PropTypes.string,
    color: PropTypes.string
}

export default NavItem;