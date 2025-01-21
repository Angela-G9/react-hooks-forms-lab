import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; // Adjusted the path to match the structure

test("uses a prop of 'search' to display the search term in the input field", () => {
  render(<Filter search="testing" onSearchChange={() => {}} />);
  expect(screen.getByPlaceholderText(/Search/).value).toBe("testing");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
  const onSearchChange = jest.fn();
  render(<Filter search="" onSearchChange={onSearchChange} />);

  fireEvent.change(screen.getByPlaceholderText(/Search/), {
    target: { value: "Lettuce" },
  });

  expect(onSearchChange).toHaveBeenCalledWith("Lettuce");
});
