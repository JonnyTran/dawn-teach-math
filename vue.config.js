import YAML from 'js-yaml';

module.exports = {
  site: siteInfo,

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