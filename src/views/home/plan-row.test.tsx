import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PlanRow from "./plan-row";

describe("PlanRow", () => {
  it("pairs the plan with its price", () => {
    render(<PlanRow />);

    expect(screen.getByRole("term")).toHaveTextContent("Annual Plan");
    expect(screen.getByRole("definition")).toHaveTextContent("$59.99/year");
  });

  it("names the change control beyond the word it shows", () => {
    render(<PlanRow />);

    expect(
      screen.getByRole("button", { name: /^Change ?plan$/ }),
    ).toBeInTheDocument();
  });
});
