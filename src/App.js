import React from 'react';
import Header from './components/Header';
import { LoginPageWithAuth } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { MapPage } from './components/MapPage';
import { ProfilePageWithAuth } from './components/ProfilePage';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { withAuth } from './components/AuthContext';

const pages = {
  map: { name: 'Карта', component: (props) => <MapPage {...props} />, showInMenu: true, isPrivate: true },
  profile: { name: 'Профиль', component: (props) => <ProfilePageWithAuth {...props} />, showInMenu: true, isPrivate: true },
  login: { name: 'Войти', component: (props) => <LoginPageWithAuth {...props} />, showInMenu: true },
  registration: { name: 'Регистрация', component: (props) => <RegistrationPage {...props} />, showInMenu: false }
}

const menuItems = [];
for (let key in pages) {
    if (pages[key].showInMenu !== false) {
      menuItems.push({ 'page': key, 'text': pages[key].name } );
    }
};

class AppClass extends React.Component {
  state = { 
    currentPage: 'login'
  };

  goToPage = ( page ) => {
    const isPrivatePage = pages[page].isPrivate ? true : false;
    if ( (isPrivatePage && this.props.isLoggedIn) || (!isPrivatePage) ) {
      this.setState({ currentPage: page })
    } else {
      this.setState({ currentPage: 'login' })
    }

    // this.setState({ currentPage: page })
  };

  render() {
    return (
        <>
          <Header 
              menuItems={ menuItems }
              currentPage={ this.state.currentPage }
              goToPage={ this.goToPage }
          />
          <main>
            <section>
                { pages[this.state.currentPage].component({ goToPage: this.goToPage }) }
            </section>
          </main>
        </>
    )
  }
}

export const App =  withAuth(AppClass);
