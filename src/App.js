import React from 'react';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import PropTypes from 'prop-types';

const listPages = {
  map: { name: 'Карта', component: MapPage, showInMenu: true },
  profile: { name: 'Профиль', component: ProfilePage, showInMenu: true },
  login: { name: 'Войти', component: LoginPage, showInMenu: true },
  registration: { name: 'Регистрация', component: RegistrationPage, showInMenu: false },
}

const menuItems = [];
let loginItemIndex = null;
for (let key in listPages) {
    if (listPages[key].showInMenu !== false) {
      menuItems.push({ 'page': key, 'text': listPages[key].name } );
      if ( loginItemIndex === null  && key === 'login' ) {
        loginItemIndex = menuItems.length - 1;
      }
    }
};

const { Provider, Consumer } = React.createContext();

class App extends React.Component {
  state = { 
    currentPage: 'map',
    isLoggedIn: false,
    currentUser: null
  };

  goToPage = ( page ) => {
    this.setState( {currentPage: page} );
  };

  login = ({ userEmail, userPassword }) => {
    if (loginItemIndex !== null) {
      menuItems[loginItemIndex].text = 'Выйти';
    }
    this.setState({ isLoggedIn: true });
    this.setState ({ currentUser: userEmail })
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
    this.setState ({ currentUser: null })
  };

  render() {
    const Page = listPages[ this.state.currentPage ].component;

    Page.propTypes = {
      goToPage: PropTypes.func
    };
    
    return (
      <Provider value={{
        isLoggedIn: this.state.isLoggedIn,
        logIn: this.login,
        logOut: this.logout
      }}>
        <Header pages={menuItems} currentPage={this.state.currentPage} goToPage={this.goToPage}/>
        <main>
          <section>
            <Consumer>
              {(value) => <Page goToPage={this.goToPage} isLoggedIn={value.isLoggedIn} logIn={value.logIn} logOut={value.logOut}/>}
            </Consumer>
          </section>
        </main>
      </Provider>
    )
  }
}

export default App;
