import { describe, it, expect } from "vitest";
import { convertLength } from "../src/engine/lengthLogic.js";

describe("Length Conversion Engine", () => {
  it("should convert 12 inches to 1 foot", () => {
    expect(convertLength(12, "inch", "foot")).toBe(1);
  });

  it("should convert 1 kilometer to 1000 meters", () => {
    expect(convertLength(1, "kilometer", "meter")).toBe(1000);
  });

  it("should convert 1 mile to 1760 yards", () => {
    // 1 mile = 1760 yards exactly
    expect(convertLength(1, "mile", "yard")).toBe(1760);
  });

  it("should handle small metric conversions (mm to cm)", () => {
    expect(convertLength(10, "millimeter", "centimeter")).toBe(1);
  });
});
