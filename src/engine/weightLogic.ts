export type WeightUnit = "milligram" | "gram" | "kilogram" | "ounce" | "pound";

const GRAMS_PER_UNIT: Record<WeightUnit, number> = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495,
  pound: 453.592,
};

export const convertWeight = (
  value: number,
  from: WeightUnit,
  to: WeightUnit,
): number => {
  const grams = value * GRAMS_PER_UNIT[from];
  const result = grams / GRAMS_PER_UNIT[to];
  return Number(result.toFixed(6));
};
