export type TempUnit = "celsius" | "fahrenheit" | "kelvin";

/**
 * Converts any temperature to Celsius
 */
const toCelsius = (value: number, from: TempUnit): number => {
  switch (from) {
    case "fahrenheit":
      return (value - 32) * (5 / 9);
    case "kelvin":
      return value - 273.15;
    default:
      return value;
  }
};

/**
 * Converts Celsius to any other temperature
 */
const fromCelsius = (value: number, to: TempUnit): number => {
  switch (to) {
    case "fahrenheit":
      return value * (9 / 5) + 32;
    case "kelvin":
      return value + 273.15;
    default:
      return value;
  }
};

export const convertTemp = (
  value: number,
  from: TempUnit,
  to: TempUnit,
): number => {
  const celsius = toCelsius(value, from);
  const result = fromCelsius(celsius, to);
  return Number(result.toFixed(2)); // 2 decimal places is usually enough for temp
};
