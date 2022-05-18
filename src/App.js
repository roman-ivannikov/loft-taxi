import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';

const listPages = {
  map: { name: 'Карта', component: MapPage, showInMenu: true },
  profile: { name: 'Профиль', component: ProfilePage, showInMenu: true },
  login: { name: 'Войти', component: LoginPage, showInMenu: true },
  registration: { name: 'Регистрация', component: RegistrationPage, showInMenu: false },
}

const menuItems = [];
for (let key in listPages) {
    if (listPages[key].showInMenu !== false) {
      menuItems.push({ 'page': key, 'text': listPages[key].name } )
    }
};

class App extends React.Component {
  state = { currentPage: 'map' };

  goToPage = ( page ) => {
    this.setState( { currentPage: page } );
  };

  render() {
    const Page = () => listPages[ this.state.currentPage ].component;
    
    return (
      <>
        <Header pages={menuItems} currentPage={this.state.currentPage} goToPage={this.goToPage}/>
        <main>
          <section>
            <Page goToPage={this.goToPage} />
          </section>
        </main>
      </>
    )
  }
}

export default App;
