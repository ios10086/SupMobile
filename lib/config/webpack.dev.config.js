const { merge } = require('webpack-merge');
const base = require('./webpack.base.config');
const useConfig = require('../../.webpackrc.js');

module.exports = merge(base, {
    //模块参数
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: useConfig.port || 8080,//端口号
        proxy: useConfig.proxy,
        host: '0.0.0.0',
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true//允许热加载
    }
});