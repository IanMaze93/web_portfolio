import { render, screen } from "@testing-library/react";
import CodeObject from "./codeObject";
import { describe, it, expect } from "vitest";

describe("CodeObject Component", () => {
  it("handles input correctly", () => {
    render(
      <CodeObject
        title="details"
        items={[
          {
            name: "role",
            value: "Software Engineer",
          },
          {
            name: "objective",
            value: "TEST",
          },
        ]}
      />
    );

    expect(screen.getByText(/role/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/objective/i)).toBeInTheDocument();
    expect(screen.getByText(/TEST/i)).toBeInTheDocument();
  });
});
