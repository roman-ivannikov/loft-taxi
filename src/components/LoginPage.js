import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: '', userPassword: '' };
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.changePage('MapPage');
    }

    handleOther = event => {
        this.props.changePage('RegistrationPage');
    }

    render() {
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
                                    type="text"
                                    value={userEmail}
                                    name="userEmail"
                                    onChange={this.handleChange}
                                    className="form__input"
                                    autoComplete="username"
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
                        <div className="form__other">Новый пользователь? <button onClick={this.handleOther}>Регистрация</button></div>
                    </div>
                </div>
            </div>
        )
    } 

}


export default LoginPage;

