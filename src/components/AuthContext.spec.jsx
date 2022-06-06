import React from 'react';
import { AuthProvider, AuthContext } from './AuthContext';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe("AuthContext", () => {
    describe("#logIn", () => {
        it("sets 'isLoggedIn' to true", () => {
            let isLoggedIn;
            let logIn;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logIn = value.logIn;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false);
            act(() => {
                logIn("anyValue", "anyValue");
            })
            expect(isLoggedIn).toBe(true);
        })
    })

    describe("#logOut", () => {
        it("sets 'isLoggedIn' to false", () => {
            let isLoggedIn;
            let logOut;

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn;
                            logOut = value.logOut;
                            return null;
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )
            act(() => {
                logOut();
            })
            expect(isLoggedIn).toBe(false);
        })
    })
})