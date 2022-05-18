import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';


class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { currentPage: 'map' };

    this.listPages = {
      map: { name: 'Карта', component: <MapPage/>, showInMenu: true },
      profile: { name: 'Профиль', component: <ProfilePage/>, showInMenu: true },
      login: { name: 'Войти', component: <LoginPage goToPage={this.goToPage} />, showInMenu: true },
      registration: { name: 'Регистрация', component: <RegistrationPage goToPage={this.goToPage} />, showInMenu: false },
    };

    const menuItems = [];
    for (let key in this.listPages) {
        if (this.listPages[key].showInMenu !== false) {
          menuItems.push({ 'page': key, 'text': this.listPages[key].name } )
        }
    };
    this.menuItems = menuItems;
  }

  Page = () => (
    <section>
      { this.listPages[ this.state.currentPage ].component }
    </section>
  );

  goToPage = ( page ) => {
    this.setState( { currentPage: page } );
  };

  render() {
    return (
      <>
        <Header pages={this.menuItems} currentPage={this.state.currentPage} goToPage={this.goToPage}/>
        <main>
          <this.Page/>
        </main>
      </>
    )
  }
}

export default App;
