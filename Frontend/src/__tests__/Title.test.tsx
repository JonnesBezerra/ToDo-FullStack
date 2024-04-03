import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Title component", () => {
  it("displays Title", () => {
    render(<Home />);

    const title = screen.getByRole("title");

    expect(title).toBeInTheDocument();
  });
});
