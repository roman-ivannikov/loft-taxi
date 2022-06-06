import React from 'react';
import { LoginPage } from './LoginPage';
import { AuthProvider } from './AuthContext';
import { screen, render, fireEvent } from '@testing-library/react';

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

    it("correct parameter passed when register button is clicked", () => {

        const goToPage = jest.fn();

        render(
            <AuthProvider>
                <LoginPage goToPage={goToPage}/>
            </AuthProvider>);

        fireEvent.click(screen.getByText('Регистрация'));
        expect(goToPage).toHaveBeenCalledWith('registration');
    })
})