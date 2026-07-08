import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Label from "./label";

describe("Label Component", () => {
  it("displays the data passed", () => {
    render(<Label value="IanMaze/experience" />);

    expect(screen.getByText(/IanMaze/i)).toBeInTheDocument();
    expect(screen.getByText(/experience/i)).toBeInTheDocument();
  });
});
