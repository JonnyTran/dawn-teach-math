
module.exports = {
  devServer: {
    // proxy: 'http://localhost:3000',
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.startsWith('Navbar') 
          }
        }
      }
    })
  ]
}