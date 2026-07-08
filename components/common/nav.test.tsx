import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Nav from "./nav";

describe("Navagation Component", () => {
  it("displays the data passed", () => {
    render(<Nav activePage="home" />);

    expect(screen.getByText(/projects/i)).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
});
