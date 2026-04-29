## TODO.md | Roadmap

### Phase 1: The Foundation

- [x] **Commit 1: Basic Server Setup**
  - Initialize Express + TypeScript.
  - Setup EJS as the view engine.
  - Create a global `style.css` for that handwritten look.
- [x] **Commit 2: Navigation & Layout**
  - Create partials (header/nav).
  - Implement basic routing for `/length`, `/weight`, and `/temperature`.

### Phase 2: Length Conversion (The Prototype)

- [x] **Commit 3: Length UI**
  - Create the form for length in `length.ejs`.
- [x] **Commit 4: Length Engine**
  - Implement conversion logic (mm to km, inch to foot, etc.).
  - Write tests to ensure `12 inches === 1 foot`.
- [ ] **Commit 5: Length Integration**
  - Handle the POST/GET request to display results on the same page.

### Phase 3: Weight & Temperature

- [ ] **Commit 6: Weight Implementation**
  - Form UI and conversion engine for gram, kg, pound, etc.
- [ ] **Commit 7: Temperature Implementation**
  - Special logic for Celsius/Fahrenheit/Kelvin (since they aren't simple ratios).

### Phase 4: Refinement

- [ ] **Commit 8: Validation & UX**
  - Add error messages if the user inputs text instead of numbers.
  - Add a "Reset" button as seen in the wireframe.
- [ ] **Commit 9: Final Documentation**
  - README and deployment instructions.
