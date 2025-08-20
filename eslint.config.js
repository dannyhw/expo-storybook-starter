const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const globals = require("globals");
const storybook = require("eslint-plugin-storybook");

module.exports = defineConfig([
  {
    ignores: [".yarn/**", ".rnstorybook/storybook.requires.ts", ".expo/**/*"],
  },
  expoConfig,
  storybook.configs["flat/recommended"],
  {
    files: ["**/*.spec.js", "**/*.spec.jsx", "**/*.test.js", "**/*.test.jsx"],
    languageOptions: {
      globals: { ...globals.jest, ...globals.node },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);
