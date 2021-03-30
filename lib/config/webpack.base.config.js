const HtmlWebpackPlugin = require('html-webpack-plugin');
const useConfig = require('../../.webpackrc.js');
const fs = require('fs');
const cwd = process.cwd();
const appDirectory = fs.realpathSync(cwd);


module.exports = {
    entry: `${appDirectory}/src/index.js`,
    output: {
        filename: 'bundle.js',
        path: `${appDirectory}/dist`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [/node_modules/, /dependencies/],
                use: ['css-loader']
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: './'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${appDirectory}/src/index.html`,
            title: useConfig.title,
        })
    ],
};