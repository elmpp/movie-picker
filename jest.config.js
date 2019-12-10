// inspired by - https://goo.gl/LovoZ2
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    ...tsjPreset.transform
  },
  testMatch: ["**/__tests__/**/*.spec.ts?(x)", "**/__tests__/**/*.spec.js?(x)"],

  testPathIgnorePatterns: [
    "\\.(orig.jsx?)$",
    "\\.(deletable.jsx?)$",
    "\\.(orig.tsx?)$",
    "\\.(skip.tsx?)$"
  ],

  testEnvironment: "node",

  verbose: true,
  globals: {
    ["ts-jest"]: {
      tsConfig: "./tsconfig.jest.json",
      babelConfig: true,
    }
  }
};
