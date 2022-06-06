import React from 'react';
import { RegistrationPage } from './RegistrationPage';
import { screen, render, fireEvent } from '@testing-library/react';

describe("RegistrationPage", () => {
    it("render correctly", () => {
        render(<RegistrationPage/>);

        expect(screen.getByLabelText('Email*:')).toHaveAttribute('name', 'userEmail');
        expect(screen.getByLabelText('Как вас зовут?*:')).toHaveAttribute('name', 'userName');
        expect(screen.getByLabelText('Придумайте пароль*:')).toHaveAttribute('name', 'userPassword');
    })

    it("correct parameter passed when login button is clicked", () => {

        const goToPage = jest.fn();

        render(<RegistrationPage goToPage={goToPage}/>);

        fireEvent.click(screen.getByText('Войти'));
        expect(goToPage).toHaveBeenCalledWith('login');
    })
})