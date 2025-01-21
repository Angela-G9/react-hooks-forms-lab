import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm"; // Adjusted the path to match the structure

test("calls the onItemFormSubmit callback prop when the form is submitted", () => {
  const onItemFormSubmit = jest.fn();
  render(<ItemForm onItemFormSubmit={onItemFormSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/Name/), {
    target: { value: "Ice Cream" },
  });

  fireEvent.submit(screen.getByText(/Add to List/));

  expect(onItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      id: expect.any(String),
      name: "Ice Cream",
      category: "Dessert",
    })
  );
});
