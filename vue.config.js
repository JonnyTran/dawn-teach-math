
module.exports = {
  devServer: {
    // proxy: 'http://localhost:3000',
    proxy: {
      '^/v1': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    }
  }
}