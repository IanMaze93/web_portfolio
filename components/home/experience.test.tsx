import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experience from "./experience";

describe("Experience Component", () => {
  it("displays the data passed", () => {
    render(<Experience />);

    // Detect Label
    expect(screen.getByText(/IanMaze\/experience/i)).toBeInTheDocument();

    // Detect Code Array
    // -- Detect Title
    expect(screen.getByText(/positions/i)).toBeInTheDocument();
    // -- Detect Array Items
    expect(screen.getByText("Software Engineer 2")).toBeInTheDocument();
    expect(screen.getByText("Software Engineer 1")).toBeInTheDocument();
    expect(screen.getByText("IT Support")).toBeInTheDocument();
  });
});
