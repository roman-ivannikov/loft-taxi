import React from 'react';
import { withAuth } from './AuthContext';
import Button from '@mui/material/Button';

class ProfilePage extends React.Component {
    unauthenticated = () => {
        this.props.logOut();
        this.props.goToPage('login');
    }

    render() {
        return <p>Это ваш Профиль.<br /><Button onClick={this.unauthenticated}>Выйти</Button></p>;
    }
}

export const ProfilePageWithAuth = withAuth(ProfilePage);