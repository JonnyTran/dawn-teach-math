module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    // proxy: 'http://localhost:5173',
    proxy: {
      '^/v1': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    }
  }
}