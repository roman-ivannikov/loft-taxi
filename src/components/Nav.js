import React from "react";

class Nav extends React.Component {
    handleClick(e) {
        this.props.changePage( e.target.dataset.href );
    }

    NavItem = ({ page, text }) => {
        let classItem = 'nav__item';
        if ( page === this.props.currentPage ) {
            classItem += ' nav__item_active';
        }
        return <button type="button" className={classItem} data-href={page} onClick={this.handleClick.bind(this)}>{text}</button>;
    }

    render() {
        let items = []
        for (let key in this.props.pages) {
            if (this.props.pages[key][2] !== false) {
                items.push({ 'page': key, 'text': this.props.pages[key][0] } )
            }
        }
        return (
            <nav className="header__nav nav">
                {items.map( item => (
                    <this.NavItem key={item.page} text={item.text} page={item.page}/>
                ))}
            </nav>
        );
    }
}

export default Nav;