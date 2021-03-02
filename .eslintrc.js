module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
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
  ],
  rules: { "react/prop-types": 0 },
};
