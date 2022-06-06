import React, { useState } from 'react';
import { withAuth } from './components/AuthContext';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { MapPage } from './components/MapPage'
import { ProfilePage } from './components/ProfilePage';
import { Header } from './components/Header';



const PAGES = {
  login: (props) => <LoginPage {...props}/>,
  registration: (props) => <RegistrationPage {...props}/>,
  map: (props) => <MapPage {...props}/>,
  profile: (props) => <ProfilePage {...props}/>
}


const Main = () => {

  const [currentPage, setCurrentPage] = useState( 'login' );

  const goToPage = ( page ) => {
      setCurrentPage( page )
  }

  return (
      <>
        <Header currentPage={ currentPage } goToPage={ goToPage }/>
        <main>
          { PAGES[currentPage]({ goToPage: goToPage }) }
        </main>
      </>
  )
}

export const App = withAuth(Main);