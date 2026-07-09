import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectContent from "./projectContent";

describe("Project Content Component", () => {
  it("handles input correctly", () => {
    render(<ProjectContent />);

    // -- Project 1
    expect(screen.getByText(/Web Portfolio/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Web Portfolio/i)).toBeInTheDocument();

    // -- Project 2
    expect(
      screen.getByText(/Ask Alfred \(Batman Fan Project\)/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/Ask Alfred/i)).toBeInTheDocument();

    // -- Project 3
    expect(screen.getByText(/S3 Uploader/i)).toBeInTheDocument();
    expect(screen.getByAltText(/S3 Uploader/i)).toBeInTheDocument();
  });
});
