import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFound, { metadata } from "./not-found";

describe("NotFound", () => {
  it("names the problem and offers one way back", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Page not found" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Back to the order summary" }),
    ).toHaveAttribute("href", "/");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });

  it("reassures that nothing was charged", () => {
    render(<NotFound />);

    expect(screen.getByText(/nothing has been charged/i)).toBeInTheDocument();
  });

  it("carries its own title and stays out of the index", () => {
    expect(metadata.title).toBe("Order Summary | Page not found");
    expect(metadata.robots).toEqual({ index: false });
  });
});
