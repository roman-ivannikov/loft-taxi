import React from 'react';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userEmail: '', userName: '', userPassword: '' };
    }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.changePage('MapPage');
    }

    handleOther = event => {
        this.props.changePage('LoginPage');
    }

    render() {
        const { userEmail, userName, userPassword } = this.state;
        return (
            <div className="page">
                <div className="form">
                    <div className="form__wrapper">
                        <div className="form__title">Регистрация</div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__fieldset">
                                <label>
                                    Email*:
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
                                    Как вас зовут?*:
                                    <input
                                    type="text"
                                    value={userName}
                                    name="userName"
                                    onChange={this.handleChange}
                                    className="form__input"
                                    autoComplete="username"
                                    required
                                    />
                                </label>
                                <label>
                                    Придумайте пароль*:
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
                            <input className="form__submit" type="submit" value="Зарегистрироваться" />
                        </form>
                        <div className="form__other">Уже зарегистрированны? <button onClick={this.handleOther}>Войти</button></div>
                    </div>
                </div>
            </div>
        )
    } 

}


export default RegistrationPage;

