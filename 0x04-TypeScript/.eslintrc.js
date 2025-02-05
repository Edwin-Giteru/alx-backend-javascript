module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-explicit-any": "off"
    }
  };
  