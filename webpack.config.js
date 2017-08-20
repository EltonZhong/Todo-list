var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
			new UglifyJSPlugin({
				uglifyOptions: {
			      warnings: false
				}
			})
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