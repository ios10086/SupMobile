const webpackConfig = {
    port: 8081,
    proxy: {
      '/inter-api': {
        target: 'http://192.168.90.192:30215'
        // changeOrigin: true
      }
    },
    version: '1.0.0',
    title: '移动脚手架',
    isOpenBrowser: true,
    language: ['en', 'zh-cn'],
    defaultLanguage: 'zh-cn'
  };
  
  module.exports = webpackConfig;