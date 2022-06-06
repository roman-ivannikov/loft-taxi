import React from 'react';
import { LoginPage } from './LoginPage';
import { AuthProvider } from './AuthContext';
import { screen, render } from '@testing-library/react';

describe("LoginPage", () => {
    it("render correctly", () => {
        render(
            <AuthProvider>
                <LoginPage/>
            </AuthProvider>
            );

        expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'userEmail');
        expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'userPassword');
    })
})