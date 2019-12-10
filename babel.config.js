/**
 *  - next-adapter/babel GH - https://tinyurl.com/qpn3xkl
 *  - production bundle trimming with RNP - https://tinyurl.com/y6yhrwqc
 */

module.exports = {
  presets: ["@expo/next-adapter/babel"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"]
    },
    test: {
      presets: [
        [
          "@babel/env",
          {
            modules: "commonjs",
            useBuiltIns: "usage",
            debug: false
          }
        ],
      ]
    }
  }
};
