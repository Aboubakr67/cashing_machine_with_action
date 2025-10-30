export default {
  testEnvironment: "node",
  transform: {},
  extensionsToTreatAsEsm: [".js"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testMatch: ["**/tests/**/*.test.js", "**/?(*.)+(spec|test).js"],
  collectCoverageFrom: [
    "**/*.js",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/coverage/**",
    "!**/*.config.js",
  ],
  coverageDirectory: "coverage",
  verbose: true,
};
