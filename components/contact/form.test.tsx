import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContactForm } from "./form";

describe("Contact Form Component", () => {
  it("handles input correctly", () => {
    render(<ContactForm />);

    // Detect Label
    expect(screen.getByText(/IanMaze\/contactForm/i)).toBeInTheDocument();

    // Detect Field Labels
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Message:/i)).toBeInTheDocument();

    // Detect Placeholders
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();

    // Detect Button
    expect(screen.getByText(/Send/i)).toBeInTheDocument();
  });
});
