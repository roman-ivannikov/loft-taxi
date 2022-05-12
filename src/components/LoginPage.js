import React from 'react';

class LoginPage extends React.Component {
    state = { userEmail: '', userPassword: '' };

    handleEmailChange = event => {
        this.setState({ userEmail: event.target.value });
    };
    
    handlePasswordChange = event => {
        this.setState({ userPassword: event.target.value });
    };

    render() {
        const { userEmail, userPassword } = this.state;
        return (
            <div className="page">
                <div className="form">
                    <div className="form__wrapper">
                        <div className="form__title">Войти</div>
                        <form>
                            <label>
                                Email:
                                <input
                                type="text"
                                value={userEmail}
                                onChange={this.handleEmailChange}
                                />
                            </label>
                            <label>
                                Пароль:
                                <input
                                type="password"
                                value={userPassword}
                                onChange={this.handlePasswordChange}
                                />
                            </label>
                            <div className="form__forgot">Забыли пароль</div>
                            <input className="form__submit" type="submit" value="Войти" />
                            <div className="form__registration">Новый пользователь? <span>Регистрация</span></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    } 

}


export default LoginPage;

