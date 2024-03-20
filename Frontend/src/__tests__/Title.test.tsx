import { Title } from "@/components";
import Home from "@/app/page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("displays Title", () => {
  render(<Home />);

  const title = screen.getByRole("title");

  expect(title).toBeInTheDocument();
});
