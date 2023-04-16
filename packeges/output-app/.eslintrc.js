module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    "sort-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "next",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  "import/order": [
    "error",
    {
      groups: [["builtin", "external"], "internal"],
      "newlines-between": "always",
      alphabetize: { order: "asc", caseInsensitive: true },
    },
  ],
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/.next/**"],
}
