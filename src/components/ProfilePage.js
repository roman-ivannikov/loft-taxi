import React from 'react';
import AccessDenied from './AccessDenied';

const ProfilePage = ({ isLoggedIn }) => {
    return isLoggedIn ? <h1>Profile Page</h1> : <AccessDenied/>;
}

export default ProfilePage;