import React, { useContext, useState } from 'react';
import AuthContext, { withAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const [ authData, setAuthData ] = useState( { userEmail: '', userPassword: '' } );

    const { logIn } = useContext( AuthContext );

    const history = useHistory();

    const handleChange = event => {
        const target = event.target;
        setAuthData( { ...authData, [target.name]: target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        logIn( authData );
        history.push( "/profile" );
    }

    return (
        <div className="page">
            <div className="form">
                <div className="form__wrapper">
                    <div className="form__title">Войти</div>
                    <form onSubmit={handleSubmit}>
                        <div className="form__fieldset">
                            <label>
                                Email:
                                <input
                                type="email"
                                value={authData.userEmail}
                                name="userEmail"
                                onChange={handleChange}
                                className="form__input"
                                autoComplete="email"
                                required
                                />
                            </label>
                            <label>
                                Пароль:
                                <input
                                type="password"
                                value={authData.userPassword}
                                name="userPassword"
                                onChange={handleChange}
                                className="form__input"
                                autoComplete="current-password"
                                required
                                />
                            </label>
                        </div>
                        <div className="form__forgot">Забыли пароль?</div>
                        <input className="form__submit" type="submit" value="Войти" />
                    </form>
                    <div className="form__other">Новый пользователь? <Link to="/registration">Регистрация</Link></div>
                </div>
            </div>
        </div>
    )
}

export const LoginPage = withAuth(Login);