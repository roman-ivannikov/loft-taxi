import React from 'react';
import { LoginPageWithAuth } from './LoginPage';
import { screen, render } from '@testing-library/react';

describe("LoginPage", () => {
    it("render correctly", () => {
        render(<LoginPageWithAuth/>);

        expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'userEmail');
        expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'userPassword');
    })
})