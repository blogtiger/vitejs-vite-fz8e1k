import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  {
    rules: {
      "no-unused-vars": "warn",  // Warn about unused variables/functions
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];