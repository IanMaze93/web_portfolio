import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ExtraStuff from "./extra";

describe("Extra Component", () => {
  it("displays the data passed", () => {
    render(<ExtraStuff />);

    // Detect Github Graph
    // -- Detect Label
    expect(screen.getByText(/IanMaze\/github/i)).toBeInTheDocument();
    // -- Detect Graph
    expect(screen.getByText("Github | Ian Maze")).toBeInTheDocument();

    // Detect Terminal Commands
    // -- Detect Label
    expect(screen.getByText(/IanMaze\/terminal/i)).toBeInTheDocument();
    // -- Detect commands
    expect(screen.getByText("--show-commands")).toBeInTheDocument();
    expect(screen.getByText("--clear")).toBeInTheDocument();
    expect(screen.getByText("--verify-candidate")).toBeInTheDocument();
    expect(screen.getByText("--download-resume")).toBeInTheDocument();
  });
});
