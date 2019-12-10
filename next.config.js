// @generated: @expo/next-adapter@2.0.0-beta.8
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withImages = require("next-images");
const withFonts = require("next-fonts");

const withMoviePicker = nextConfig => {
  return {
    ...nextConfig,
    webpack: (webpackConfig, options) => {
      webpackConfig = withWebpackTypescriptWebExtensions(webpackConfig, options);
      webpackConfig = withWebpackFixHammerJsSSR(webpackConfig, options);
      return webpackConfig;
    }
  };
};

/**
 * Expo's next-adaptor isn't adding the typescript "platform extensions"...
 */
const withWebpackTypescriptWebExtensions = (webpackConfig, options) => {
  webpackConfig.resolve.extensions = [".web.tsx", ".web.ts"].concat(
    webpackConfig.resolve.extensions
  );
  return webpackConfig;
};

/**
 * Upgrading to Expo SDK 36 and its react-native-gesture-handler dependency brings
 * in hammerjs
 *
 *  - bug report - https://tinyurl.com/uyrzxxa
 *  - fix approach - https://tinyurl.com/u7xu34c
 */
const withWebpackFixHammerJsSSR = (webpackConfig, {isServer}) => {
  if (isServer) {
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      'hammerjs': "empty-module",
      // 'hammerjs': process.env.NODE_ENV === 'production' ? "empty-module": "jquery-migrate",
    }
    // webpackConfig.module.rules.push({
    //   test: /hammerjs/,
    //   loader: "null-loader",
    // });
  }
  return webpackConfig;
};

module.exports = withExpo(
  withFonts(
    withImages(
      withMoviePicker({
        projectRoot: __dirname
      })
    )
  )
);
