module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "test/.*",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
