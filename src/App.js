import React, { useState, useContext } from 'react';
import { withAuth } from './components/AuthContext';
import { LoginPage } from './components/LoginPage';
import { RegistrationPage } from './components/RegistrationPage';
import { MapPage } from './components/MapPage'
import { ProfilePage } from './components/ProfilePage';
import { Header } from './components/Header';
import { Route, Switch, Redirect } from 'react-router-dom';

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

  let PrivateRoute = ({
    component: RouteComponent,
    isLoggedIn,
    ...rest
  }) => (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/registration" />
        )
      }
    />
  );
   
  PrivateRoute = withAuth(PrivateRoute);

  return (
      <>
        <Header currentPage={ currentPage } goToPage={ goToPage } />
        <main>
          <Switch>
            <Route path="/" component={LoginPage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <PrivateRoute
              path="/profile"
              component={ProfilePage}
            />
            <PrivateRoute
              path="/map"
              component={MapPage}
            />
            <Redirect to="/login" />
          </Switch>
        </main>
      </>
  )
}

export const App = withAuth(Main);