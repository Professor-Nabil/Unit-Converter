import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { convertLength, LengthUnit } from "./engine/lengthLogic.js";
import { convertWeight, WeightUnit } from "./engine/weightLogic.js";
import { convertTemp, TempUnit } from "./engine/tempLogic.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

/**
 * Simple validation helper
 */
const validateInput = (value: string): number | null => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
};

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

// GET: Display the empty form
app.get("/length", (req, res) => {
  res.render("length", {
    title: "Length Converter",
    value: undefined,
    result: undefined,
  });
});

// POST: Process the conversion and re-render the page
app.post("/length", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const numValue = validateInput(value);

  if (numValue === null) {
    return res.render("length", {
      title: "Length Converter",
      error: "Please enter a valid number.",
      value,
      result: undefined,
    });
  }

  const result = convertLength(
    numValue,
    fromUnit as LengthUnit,
    toUnit as LengthUnit,
  );

  res.render("length", {
    title: "Length Converter",
    value: numValue,
    fromUnit,
    toUnit,
    result,
    error: undefined,
  });
});

app.get("/weight", (req, res) => {
  res.render("weight", {
    title: "Weight Converter",
    value: undefined,
    result: undefined,
  });
});

app.post("/weight", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const numValue = validateInput(value); // Use the helper!

  if (numValue === null) {
    return res.render("weight", {
      title: "Weight Converter",
      error: "Please enter a valid number.",
      value,
      result: undefined,
    });
  }

  const result = convertWeight(
    numValue,
    fromUnit as WeightUnit,
    toUnit as WeightUnit,
  );
  res.render("weight", {
    title: "Weight Converter",
    value: numValue,
    fromUnit,
    toUnit,
    result,
  });
});

app.get("/temperature", (req, res) => {
  res.render("temperature", {
    title: "Temperature Converter",
    value: undefined,
    result: undefined,
  });
});

app.post("/temperature", (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const numValue = validateInput(value); // Use the helper!

  if (numValue === null) {
    return res.render("temperature", {
      title: "Temperature Converter",
      error: "Please enter a valid number.",
      value,
      result: undefined,
    });
  }

  const result = convertTemp(
    numValue,
    fromUnit as TempUnit,
    toUnit as TempUnit,
  );
  res.render("temperature", {
    title: "Temperature Converter",
    value: numValue,
    fromUnit,
    toUnit,
    result,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
