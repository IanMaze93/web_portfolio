import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Summary from "./summary";

describe("Summary Content Component", () => {
  it("handles input correctly", () => {
    render(<Summary />);

    // Detect Label
    expect(screen.getByText(/IanMaze\/home/i)).toBeInTheDocument();

    // Detect Code Object
    // -- Detect Role
    expect(screen.getByText(/role/i)).toBeInTheDocument();
    expect(screen.getByText('"Software Engineer"')).toBeInTheDocument();
    // -- Detect Objective
    expect(screen.getByText(/objective/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Software engineer specializing in backend platforms, AI applications, cloud infrastructure, and distributed systems/i
      )
    ).toBeInTheDocument();
  });
});
