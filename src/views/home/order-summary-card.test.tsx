import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OrderSummaryCard from "./order-summary-card";

describe("OrderSummaryCard", () => {
  it("leads with the order heading and what the plan unlocks", () => {
    render(<OrderSummaryCard />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Order Summary" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
      ),
    ).toBeInTheDocument();
  });

  it("offers every action as a button rather than a dead link", () => {
    render(<OrderSummaryCard />);

    expect(
      screen.getByRole("button", { name: "Proceed to Payment" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cancel Order" }),
    ).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });

  it("keeps the illustration out of the accessibility tree", () => {
    render(<OrderSummaryCard />);

    expect(screen.queryByRole("img")).toBeNull();
  });
});
