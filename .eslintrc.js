module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-typescript",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:jest/all",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
  ],
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "jest",
    "testing-library",
    "jest-dom",
    "graphql",
  ],
  rules: { "react/prop-types": 0 },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
};
