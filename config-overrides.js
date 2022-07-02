const {override, addWebpackAlias, addPostcssPlugins} = require('customize-cra')
const addLessLoader = require('customize-cra-less-loader')
const path = require('path')

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
        localIdentName: "[path][name]__[local]--[hash:base64:5]"
      }
    }
  }),
  addPostcssPlugins([require('postcss-px2rem')({remUnit: 100, exclude: /node-modules/})]),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)