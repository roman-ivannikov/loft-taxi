import React from 'react';
import { LoginPage } from './LoginPage';
import { screen, render } from '@testing-library/react';

describe("LoginPage", () => {
    it("render correctly", () => {
        render(<LoginPage/>);

        expect(screen.getByLabelText('Email:')).toHaveAttribute('name', 'userEmail');
        expect(screen.getByLabelText('Пароль:')).toHaveAttribute('name', 'userPassword');
    })
})