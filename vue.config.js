module.exports = {
  devServer: {
    // proxy: 'http://localhost:5173',
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }

  }
}
Vue.http.headers.common['Access-Control-Allow-Origin'] = true