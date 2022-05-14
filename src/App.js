import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';


class App extends React.Component {
  state = { currentPage: 'map' };

  changePage = ( page ) => {
    this.setState( { currentPage: page } );
  }

  listPages = {
    map: ['Карта', <MapPage/>],
    profile: ['Профиль', <ProfilePage/>],
    login: ['Войти', <LoginPage changePage={this.changePage}/>],
    registration: ['Регистрация', <RegistrationPage changePage={this.changePage}/>, false]
  }
  
  render() {
    return (
      <>
        <Header pages={this.listPages} currentPage={this.state.currentPage} changePage={this.changePage}/>
        <main>
          <section>
            {this.listPages[this.state.currentPage][1]}
          </section>
        </main>
      </>
    )
  }
}

export default App;
