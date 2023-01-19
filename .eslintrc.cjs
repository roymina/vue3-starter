module.exports = {
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "/src"]]
      }
    }
  },
  env: {
    es6: true,
    browser: true,
    es2021: true
  },
  extends: ["plugin:vue/essential", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      },
      { usePrettierrc: true }
    ]
  }
};
