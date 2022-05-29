import React from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = React.useState(false);

    const logIn = (email, password, cb) => {
        setIsLoggedIn(true, cb);
    }

    const logOut = ( cb ) => {
        setIsLoggedIn(false, cb);
    }

    return (
        <AuthContext.Provider value={{ logIn, logOut, isLoggedIn }}>
            { children }
        </AuthContext.Provider>
    )
}

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <WrappedComponent {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}
