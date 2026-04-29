# File-Structure.md | Unit Converter

```text
.
├── src/
│   ├── server.ts         # Entry point: Express setup & middleware
│   ├── routes/           # Route handlers for Length, Weight, Temp
│   │   ├── length.ts
│   │   ├── weight.ts
│   │   └── temp.ts
│   ├── engine/           # Pure conversion logic (The "Math" files)
│   │   ├── lengthLogic.ts
│   │   ├── weightLogic.ts
│   │   └── tempLogic.ts
│   ├── views/            # EJS Templates (Pure HTML/CSS)
│   │   ├── partials/     # Header, Footer, Navigation
│   │   ├── length.ejs
│   │   ├── weight.ejs
│   │   └── temp.ejs
│   └── types.ts          # Conversion interfaces
├── tests/                # Vitest for the math logic
├── public/               # Static CSS and images
│   └── style.css
├── package.json
└── tsconfig.json
```
