var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            // 'webpack-dev-server/client?http://localhost:8080/',
            __dirname + "/scripts/main.js"
        ]
    },
    output: {
        // publicPath: '/ass/',
        path: __dirname + "/build",
        filename: "boundle.js"
    },
    module: {
        plugins: [
            //makes jQuery available in every module
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production'),
                },
                __UNIMPL_STEP__: false,
                __MTHOR_PROJECT_ID__: 1
            }),

            // keeps hashes consistent between compilations
            new webpack.optimize.OccurrenceOrderPlugin(),

            // minifies your code
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    comments: false,
                },
                compressor: {
                    warnings: false
                }
            }),

            new webpack.NoErrorsPlugin()
 
        ],
        loaders: [{
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],

            },
            {
                test: /\.css$/,
                loader: 'style!css',
                // exclude: /node_modules/,
            },
            {　　　　　
                test: /\.(png|jpg)$/,
                　　　　　loader: 'url-loader?limit=8192'　　　　
            },
            //   {
            //     test: /\.css$/,
            //              exclude: /node_modules/,
            //     loader: 'style-loader!css-loader?modules=false'
            // },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
    // devServer: {
    //        colors: true,//终端中输出结果为彩色
    //        historyApiFallback: true,//不跳转
    //        inline: true,//实时刷新
    //        hot:true,
    // 	progress:true,
    //        port:8080
    //    }
}