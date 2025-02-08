const path = require("path");

module.exports = {
  resolve: {
    fullySpecified: false
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: "javascript/auto"
      }
    ]
  }
};
