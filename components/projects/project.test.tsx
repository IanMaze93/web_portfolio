import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Project } from "./project";

describe("Project Component", () => {
  it("displays the data passed", () => {
    render(
      <Project
        label="IanMaze/projects/web_portfolio"
        name="Web Portfolio"
        description="test"
        githubLink="https://github.com/IanMaze93/web_portfolio"
        imageSrc="/web_portfolio.png"
        imageAlt="Web Portfolio"
      />
    );

    expect(screen.getByText(/Web Portfolio/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Web Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByText(/github/i)).toBeInTheDocument();
    expect(screen.getByText(/IanMaze93/i)).toBeInTheDocument();
  });
});
