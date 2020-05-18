import React from "react";
import { render, getByAltText } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});


test("displays first name placeholder", function () {
    const firstNamePlaceholderExpected = ""
    const { getByTestId } = render(<App />);
      const firstNameElem = getByTestId("firstNamePlaceholder");
      expect(firstNameElem.textContent).toBe(firstNamePlaceholderExpected)
});

test("displays last name placeholder", function () {
  const lastNamePlaceholderExpected = ""
  const { getByTestId } = render(<App />);
    const lastNameElem = getByTestId("lastNamePlaceholder");
    expect(lastNameElem.textContent).toBe(lastNamePlaceholderExpected)
});