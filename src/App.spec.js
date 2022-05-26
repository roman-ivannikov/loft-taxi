import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

jest.mock('./MapPage', () => ({ MapPage: () => <div>MapPage component</div>}));
jest.mock('./ProfilePage', () => ({ ProfilePage: () => <div>ProfilePage component</div>}));
jest.mock('./LoginPage', () => ({ LoginPage: () => <div>LoginPage component</div>}));

describe("App", () => {
  it("render correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("MapPage component");
  })

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { container } = render(<App />);

      fireEvent.click(screen.getByText('Профиль'));
      expect(container.innerHTML).toMatch("ProfilePage component");
      fireEvent.click(screen.getByText('Войти'));
      expect(container.innerHTML).toMatch("LoginPage component");

    })
  })
})

