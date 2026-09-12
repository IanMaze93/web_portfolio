import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Project } from "./project";

describe("Project Component", () => {
  it("handles input correctly", () => {
    render(
      <Project
        label="IanMaze/projects/web_portfolio"
        name="Web Portfolio"
        description="test"
        githubLinks={[
          {
            label: "Web Portfolio",
            url: "https://github.com/IanMaze93/web_portfolio",
          },
        ]}
        imageSrc="/web_portfolio.png"
        imageAlt="Web Portfolio"
      />
    );

    expect(
      screen.getByRole("heading", { name: /Web Portfolio/i })
    ).toBeInTheDocument();
    expect(screen.getByAltText(/Web Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Web Portfolio/i })
    ).toHaveAttribute("href", "https://github.com/IanMaze93/web_portfolio");
  });
});
