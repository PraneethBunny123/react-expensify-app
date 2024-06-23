const config = {
    extensionsToTreatAsEsm: ['.ts'],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    }
  };
  
module.exports = config;

// module.exports = {
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.jsx?$": "babel-jest"
//   }
// };
