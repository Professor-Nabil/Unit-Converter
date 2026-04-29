export type LengthUnit =
  | "millimeter"
  | "centimeter"
  | "meter"
  | "kilometer"
  | "inch"
  | "foot"
  | "yard"
  | "mile";

const METERS_PER_UNIT: Record<LengthUnit, number> = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
};

/**
 * Converts a length value from one unit to another
 */
export const convertLength = (
  value: number,
  from: LengthUnit,
  to: LengthUnit,
): number => {
  // 1. Convert input to meters
  const meters = value * METERS_PER_UNIT[from];

  // 2. Convert meters to target unit
  const result = meters / METERS_PER_UNIT[to];

  // Clean up floating point math (e.g., 0.0000000000001)
  return Number(result.toFixed(6));
};
