import React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "@/components";
import "@testing-library/jest-dom";

describe("Task component", () => {
  it("renders the task description and completion icon", () => {
    const taskData = { _id: "1", description: "Write tests", completed: true };
    render(<Task {...taskData} />);

    const taskItem = screen.getByText(taskData.description, { exact: false });
    expect(taskItem).toBeInTheDocument();

    const checkIcon = screen.getByTestId("check-outline");
    expect(checkIcon).toBeInTheDocument();
  });

  it("applies strikethrough to completed tasks", () => {
    const completedTask = {
      _id: "2",
      description: "Completed task",
      completed: true,
    };
    render(<Task {...completedTask} />);

    const completedTaskText = screen.getByText(completedTask.description);
    expect(completedTaskText).toHaveStyle("text-decoration-line: line-through");
  });
});
