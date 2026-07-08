import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactList } from "./contactList";

describe("Contact List Component", () => {
  it("displays the data passed", () => {
    render(<ContactList />);

    // Detect Contact Links
    // -- Github Link
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/IanMaze93");
    expect(screen.getByAltText("github icon")).toBeInTheDocument();

    // -- Linkedin Link
    const linkedInLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ian-maze-50943a194/"
    );
    expect(screen.getByAltText("linkedin icon")).toBeInTheDocument();

    // -- Email Link
    const emailLink = screen.getByRole("link", {
      name: /mail/i,
    });
    expect(emailLink).toHaveAttribute("href", "mailto:mazeiandev@outlook.com");
    expect(screen.getByAltText("email icon")).toBeInTheDocument();
  });
});
