module.exports = {
  testEnvironment: "node",
  transform: {},
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "**/*.js",
    "!node_modules/**",
    "!coverage/**",
    "!jest.config.cjs",
    "!**/*.config.js"
  ],
  moduleFileExtensions: ["js", "json", "node"]
};
