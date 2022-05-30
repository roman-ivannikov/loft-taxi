import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { App } from "./App";

jest.mock('./components/LoginPage', () => ({ LoginPage: () => <div>LoginPage component</div>}));
jest.mock('./components/RegistrationPage', () => ({ RegistrationPage: () => <div>RegistrationPage component</div>}));

describe("App", () => {
  it("render correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("LoginPage component");
  })

  describe("when clicked on registration buttons", () => {
    it("opens the corresponding page", () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByText('Регистрация'));
      expect(container.innerHTML).toMatch("RegistrationPage component");
    })
  })

  describe("when clicked on login buttons", () => {
    it("opens the corresponding page", () => {
      const { container } = render(<App />);
      fireEvent.click(screen.getByText('Регистрация'));
      fireEvent.click(screen.getByText('Войти'));
      expect(container.innerHTML).toMatch("LoginPage component");
    })
  })
})

