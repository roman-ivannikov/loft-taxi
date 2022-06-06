import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { AuthProvider } from './components/AuthContext';

jest.mock('./components/LoginPage', () => ({ LoginPage: () => <div>LoginPage component</div>}));

describe("App", () => {
  it("render correctly", () => {
    const { container } = render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    expect(container.innerHTML).toMatch("LoginPage component");
  })
})