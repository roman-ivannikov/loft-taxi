import React, { useContext } from 'react';
import logo from '../logo.svg';
import Button from '@mui/material/Button';
import AuthContext from './AuthContext';
import { PropTypes } from 'prop-types';

export const Header = ( { currentPage, goToPage } ) => {
    
    const { isLoggedIn, logOut } = useContext( AuthContext );

    const exit = () => {
        logOut( goToPage( 'login' ) );
    }

    const navigate = ( event ) => {
        const href = event.target.dataset.href;
        href && goToPage( href );
    }
  
    return (
        isLoggedIn ? 
            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        <img src={ logo } className="header__logo" alt="logo" />
                        <nav className="header__nav nav">
                            <Button
                                className="nav__item"
                                onClick={navigate}
                                data-href="map"
                                color={ currentPage === 'map' ? "secondary" : "primary" }
                            >
                                Карта
                            </Button>
                            <Button
                                className="nav__item"
                                onClick={navigate}
                                data-href="profile"
                                color={ currentPage === 'profile' ? "secondary" : "primary" }
                            >
                                Профиль
                            </Button>
                            <Button
                                className="nav__item"
                                onClick={ exit }
                            >
                                Выйти
                            </Button>
                        </nav>
                    </div>
                </div>
            </header>
        : null
    )
};

Header.propTypes = {
    currentPage: PropTypes.string,
    goToPage: PropTypes.func
}