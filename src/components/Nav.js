import React from "react";

class Nav extends React.Component {
    handleClick = (e) => {
        this.props.goToPage( e.target.dataset.href );
    }

    NavItem = ({ page, text }) => {
        let classItem = 'nav__item';
        if ( page === this.props.currentPage ) {
            classItem += ' nav__item_active';
        }
        return <button type="button" className={classItem} data-href={page} onClick={this.handleClick}>{text}</button>;
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