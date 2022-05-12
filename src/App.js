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
    this.state = { currentPage: 'MapPage' };
    
  }
  
  navItems = [
    { text:'Карта', page:'MapPage' },
    { text:'Профиль', page:'ProfilePage' },
    { text:'Войти', page:'LoginPage' }
  ];

  changePage( newPage ) {
    this.setState( { currentPage: newPage } );
  }

  showPage = () => {
     switch (this.state.currentPage) {
      case 'MapPage':
        return <MapPage/>
      case 'ProfilePage':
        return <ProfilePage/>
      case 'LoginPage':
        return <LoginPage changePage={this.changePage.bind(this)} />
      case 'RegistrationPage':
          return <RegistrationPage changePage={this.changePage.bind(this)}/>
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header navItems={this.navItems} currentPage={this.state.currentPage} changePage={this.changePage.bind(this)}/>
        <this.showPage/>
      </>
    )
  }
}

export default App;
