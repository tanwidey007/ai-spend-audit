import { describe, expect, it } from "vitest";

function calculateSavings(
  currentSpend: number,
  optimizedSpend: number
) {
  return currentSpend - optimizedSpend;
}

describe("AI Spend Audit Tests", () => {
  it("calculates savings correctly", () => {
    expect(calculateSavings(1000, 700)).toBe(300);
  });

  it("returns zero when spends are equal", () => {
    expect(calculateSavings(500, 500)).toBe(0);
  });

  it("handles large numbers", () => {
    expect(calculateSavings(10000, 8500)).toBe(1500);
  });
});