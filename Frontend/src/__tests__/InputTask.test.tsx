import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputTask from "@/components/InputTask/InputTask";
import "@testing-library/jest-dom";

describe("InputText component", () => {
  it("should render", () => {
    render(<InputTask />);

    expect(screen.getByTestId("InputTask")).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("should update the input value on user input", async () => {
    render(<InputTask />);

    const input = screen.getByTestId("InputTask");
    const newValue = "New task";

    await userEvent.type(input, newValue);

    expect(input).toHaveValue(newValue);
  });

  it("should call the handleSubmit function on form submission", async () => {
    const mockHandleSubmit = jest.fn();

    render(<InputTask />);

    const form = screen.getByRole("form");
    form.onsubmit = mockHandleSubmit;

    const input = screen.getByTestId("InputTask");
    const newValue = "Test task";

    const addButton = screen.getByText("Add");

    await userEvent.type(input, newValue);
    await userEvent.click(addButton);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    expect(mockHandleSubmit).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should clear the input value after submission", async () => {
    render(<InputTask />);

    const input = screen.getByTestId("InputTask");
    const newValue = "Task to clear";

    const addButton = screen.getByText("Add");

    await userEvent.type(input, newValue);
    await userEvent.click(addButton);

    expect(input).toHaveValue("");
  });
});
