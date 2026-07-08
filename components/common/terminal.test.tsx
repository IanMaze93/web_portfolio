import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Terminal from "./terminal";

describe("Terminal Component", () => {
  it("displays the data passed", () => {
    render(<Terminal />);

    expect(screen.getByText(/show/i)).toBeInTheDocument();
    expect(screen.getByText(/commands/i)).toBeInTheDocument();
  });
});
