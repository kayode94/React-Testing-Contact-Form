import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

  //1. get acces to form fields
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const email = screen.getByLabelText(/email/i)

  //2.add text to fields and expect

  expect(firstName.value).toEqual('')
  fireEvent.change(firstName, {target : {value: 'Kay'}})
  expect(firstName.value).not.toEqual('')
  ////////////////////////////////////////////////////////////////

  expect(lastName.value).toEqual('')
  fireEvent.change(lastName, {target: {value: 'richards'}})
  expect(lastName.value).not.toEqual('')
  ////////////////////////////////////////////////////////////


  expect(email.value).toEqual('')
  fireEvent.change(email, {target: {value: 'email@email.com'}})
  expect(email.value).not.toEqual('')
  ///////////////////////////////////////////////////////////////////

  

});
