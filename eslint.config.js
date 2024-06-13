const globals = require("globals");
const pluginJs = require("@eslint/js");
const tsLint = require("typescript-eslint");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginPrettier = require("eslint-plugin-prettier");

module.exports = [
  pluginJs.configs.recommended,
  ...tsLint.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "off", // 允许any
    },
  },
];
