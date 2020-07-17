import React from "react";
import { render, getByAltText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

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

test("displays password placeholder", function () {
  const passwordPlaceholderExpected = ""
  const { getByTestId } = render(<App />);
    const passwordElem = getByTestId("passwordPlaceholder")
    expect(passwordElem.textContent).toBe(passwordPlaceholderExpected);
})

// test("submit button works", () => {
//   // const { getByTestId } = render(<App />);
//   // let submit = getBy
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<ContactForm onSubmit={onSubmit} />);
//   fireEvent.submit(getByTestId("form"));
//   expect(onSubmit).toHaveBeenCalled();
// })
