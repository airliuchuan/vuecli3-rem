console.log(process.env.VUE_APP_UNANALYZER);
module.exports = {
  chainWebpack: config => {
    if (process.env.VUE_APP_UNANALYZER === 'false') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}