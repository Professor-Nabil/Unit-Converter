# TECH.md | Unit Converter

### Language & Runtime

- **Node.js**: Backend runtime.
- **TypeScript**: For type-safe conversion logic.
- **EJS**: Our templating engine to render dynamic HTML without a frontend framework.

### Backend Frameworks

- **Express**: To handle routing and form submissions.
- **Fast-extract-form-data**: (Native Node/Express) We'll use standard `urlencoded` middleware to parse the forms.

### Core Logic

- **Pure Functions**: Math-heavy logic for unit ratios (Length, Weight, Temp).
- **Zod**: To validate that the input from the form is actually a number.

### Build & Dev

- **tsx**: To run our TS files directly.
- **Nodemon**: To restart the server on every save.
