module.exports = {
  ignorePatterns: [
    "**/public/**",
    "**/.cache/**",
    "**/static/**",
    "**/content/**",
  ],
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:testing-library/react",
    "plugin:react-hooks/recommended",
    "airbnb/hooks",
    "airbnb",
  ],
  plugins: ["import"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
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

        "testing-library",
        "graphql",
        "prettier",
      ],
      rules: {
        "react/require-default-props": "off",
        "react/prop-types": "off",
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
      },
      extends: ["prettier"],
      rules: {},
      plugins: [
        "testing-library",
        "react",
        "react-hooks",
        "graphql",
        "prettier",
      ],
    },
    {
      files: [
        "**/test/**",
        "**/__mocks__/**",
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.spec.jsx",
      ],
      extends: ["plugin:jest/all", "plugin:jest-dom/recommended"],
      plugins: ["jest", "jest-dom"],
      env: {
        browser: true,
        es6: true,
        "jest/globals": true,
      },
      rules: {
        "jest/no-hooks": "off",
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
  ],
};
