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
    "jest/no-hooks": "off",
  },
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
    {
      files: [
        "**/test/**",
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.spec.jsx",
      ],
      plugins: ["jest"],
      rules: {
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
