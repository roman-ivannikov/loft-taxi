import React from 'react';
import logo from '../logo.svg';

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="header__wrap">
                <img src={logo} className="header__logo" alt="logo" />
                <nav className="header__nav nav">
                    <button href="#" className="nav__item nav__item_active">Карта</button>
                    <button className="nav__item" href="#">Профиль</button>
                    <button className="nav__item" href="#">Войти</button>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;