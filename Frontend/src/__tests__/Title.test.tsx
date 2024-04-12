import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Title } from "@/components";

describe("Title component", () => {
  it("displays Title", () => {
    render(<Title />);

    const title = screen.getByRole("title");

    expect(title).toBeInTheDocument();
  });
});
