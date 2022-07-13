const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const css = require('@zeit/next-css')

const nextConfig = {
  webpack: function(config){
  config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
      loader: 'url-loader',
          options: {
          limit: 100000,
          name: '[name].[ext]'
      }}
  })
  return config
  },
  env: {
    BaseUrl:any= 'https://localhost:44308/'
  }
}

module.exports = withPlugins([
    [css],
    [sass, {
        cssModules: true
    }]
], nextConfig)


