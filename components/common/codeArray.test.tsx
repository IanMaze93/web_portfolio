import { render, screen } from "@testing-library/react";
import CodeArray from "./codeArray";
import { describe, it, expect } from "vitest";

describe("CodeArray Component", () => {
  it("displays the data passed", () => {
    render(
      <CodeArray
        title="positions"
        items={[
          {
            position: "Software Engineer 2",
            years: 2,
          },
          {
            position: "Software Engineer 1",
            years: 3,
          },
          {
            position: "IT Support",
            years: 3,
          },
        ]}
      />
    );

    expect(screen.getByText(/Software Engineer 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer 1/i)).toBeInTheDocument();
    expect(screen.getByText(/IT Support/i)).toBeInTheDocument();
  });
});
