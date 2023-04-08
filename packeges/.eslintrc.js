module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
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
  ignorePatterns: ["**/libs/**/*", "**/coverage/**", "**/.next/**"],
};
