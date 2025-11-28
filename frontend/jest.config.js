export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"]
};
