const { parsed: localEnv } = require("dotenv").config({
  path:'.env'
});
const webpack = require('webpack')

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
}
}