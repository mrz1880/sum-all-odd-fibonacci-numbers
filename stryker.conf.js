module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  mutate: ["./sumAllOddFibonacciNumbers.js"],
};

