import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);

  //1. get acces to form fields
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i)
  const message = screen.getByLabelText(/message/i)
  const email = screen.getByLabelText(/email/i)



});
