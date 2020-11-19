module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "prettier", "react-hooks"],
  rules: { "react/prop-types": 0 },
};
