import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Terminal from "./terminal";

describe("Terminal Component", () => {
  it("handles input correctly", () => {
    render(<Terminal />);

    expect(screen.getByText(/show/i)).toBeInTheDocument();
    expect(screen.getByText(/commands/i)).toBeInTheDocument();
  });

  it("displays commands", async () => {
    render(<Terminal />);

    expect(screen.getByText(/show/i)).toBeInTheDocument();
    expect(screen.getByText(/commands/i)).toBeInTheDocument();

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "--show-commands{enter}");

    expect(await screen.findByText(/--clear/)).toBeInTheDocument();
    expect(await screen.findByText(/--verify-candidate/)).toBeInTheDocument();
    expect(await screen.findByText(/--download-resume/)).toBeInTheDocument();
  });

  it("validates candidate command", async () => {
    render(<Terminal />);

    expect(screen.getByText(/show/i)).toBeInTheDocument();
    expect(screen.getByText(/commands/i)).toBeInTheDocument();

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "--verify-candidate{enter}");

    expect(await screen.findByText(/validating starting/)).toBeInTheDocument();
    expect(
      await screen.findByText(/checking availability/)
    ).toBeInTheDocument();
    expect(await screen.findByText(/verifying skills/)).toBeInTheDocument();
    expect(await screen.findByText(/COMPLETE/)).toBeInTheDocument();
  });

  it("shows error message for invalid command", async () => {
    render(<Terminal />);

    expect(screen.getByText(/show/i)).toBeInTheDocument();
    expect(screen.getByText(/commands/i)).toBeInTheDocument();

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "--invalid-command{enter}");

    expect(
      await screen.findByText(/Failed: not valid command/)
    ).toBeInTheDocument();
  });
});
