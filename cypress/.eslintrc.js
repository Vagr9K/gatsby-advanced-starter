module.exports = {
  root: true,
  extends: [
    "plugin:cypress/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "airbnb-typescript",
    "prettier",
  ],
  plugins: [
    "react",
    "import",
    "@typescript-eslint",
    "testing-library",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname, // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    project: ["./tsconfig.json"],
  },
  env: {
    browser: true,
    es6: true,
    "cypress/globals": true,
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
