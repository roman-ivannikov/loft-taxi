import React, { useContext } from 'react';
import logo from '../logo.svg';
import Button from '@mui/material/Button';
import AuthContext from './AuthContext';
import { PropTypes } from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom'

export const Header = () => {
    
    const { isLoggedIn, logOut } = useContext( AuthContext );

    const location = useLocation();
    const history = useHistory();

    const navigate = ( event ) => {
        const href = event.target.dataset.href;
        href && history.push("/" + href);
    }

    const getColor = ( path ) => {
        return ("/" + path) === location.pathname ? "secondary" : "primary";
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
                                color={ getColor('map') }
                            >
                                Карта
                            </Button>
                            <Button
                                className="nav__item"
                                onClick={navigate}
                                data-href="profile"
                                color={ getColor('profile') }
                            >
                                Профиль
                            </Button>
                            <Button
                                className="nav__item"
                                onClick={ () => logOut() }
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