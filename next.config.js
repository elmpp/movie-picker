// @generated: @expo/next-adapter@2.0.0-beta.8
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require('@expo/next-adapter');
const withImages = require('next-images')
const withFonts = require('next-fonts')

/**
 * Expo's next-adaptor isn't adding the typescript "platform extensions"...
 */
const withTypescriptWebExtensions = (nextConfig) => {
  return {
    ...nextConfig,
    webpack: (webpackConfig) => {
      webpackConfig.resolve.extensions = ['.web.tsx', '.web.ts'].concat(webpackConfig.resolve.extensions)
      return webpackConfig
    }
  }
}

module.exports = withExpo(withFonts(withImages(withTypescriptWebExtensions({
  projectRoot: __dirname,
}))));
