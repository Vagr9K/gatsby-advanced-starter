module.exports = {
  ignorePatterns: [
    "**/public/**",
    "**/.cache/**",
    "**/static/**",
    "**/content/**",
  ],
  extends: [
    "plugin:jest/all",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "airbnb",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
        "jest/globals": true,
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb-typescript",
        "prettier",
      ],
      plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "jest",
        "jest-dom",
        "testing-library",
        "graphql",
        "prettier",
      ],
      rules: {
        "react/require-default-props": "off",
      },

      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json", "**/tsconfig.json"],
      },
    },
    {
      files: ["**/*.js", "**/*.jsx"],
      env: {
        browser: true,
        es6: true,
        "jest/globals": true,
      },
      extends: ["prettier"],
      rules: {},
      plugins: [
        "jest",
        "jest-dom",
        "testing-library",
        "react",
        "react-hooks",
        "graphql",
        "prettier",
      ],
    },
  ],
};
