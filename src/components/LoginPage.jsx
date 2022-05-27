import React from 'react';
import { withAuth } from './AuthContext';

class LoginPage extends React.Component {
    state = { userEmail: '', userPassword: '' };
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.logIn(this.state);
    }

    handleRegistartion = event => {
        this.props.goToPage('registration');
    }

    unauthenticate = () => {
        this.props.logOut();
    }

    render() {
        if (this.props.isLoggedIn) {
            return <p>Вы залогинились!<br />Для выхода, перейдите в Профиль.</p>
        } else {
            const { userEmail, userPassword } = this.state;
            return (
                <div className="page">
                    <div className="form">
                        <div className="form__wrapper">
                            <div className="form__title">Войти</div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form__fieldset">
                                    <label>
                                        Email:
                                        <input
                                        type="email"
                                        value={userEmail}
                                        name="userEmail"
                                        onChange={this.handleChange}
                                        className="form__input"
                                        autoComplete="email"
                                        required
                                        />
                                    </label>
                                    <label>
                                        Пароль:
                                        <input
                                        type="password"
                                        value={userPassword}
                                        name="userPassword"
                                        onChange={this.handleChange}
                                        className="form__input"
                                        autoComplete="current-password"
                                        required
                                        />
                                    </label>
                                </div>
                                <div className="form__forgot">Забыли пароль?</div>
                                <input className="form__submit" type="submit" value="Войти" />
                            </form>
                            <div className="form__other">Новый пользователь? <button onClick={this.handleRegistartion}>Регистрация</button></div>
                        </div>
                    </div>
                </div>
            )
        }
    } 
}


export const LoginPageWithAuth = withAuth(LoginPage);

