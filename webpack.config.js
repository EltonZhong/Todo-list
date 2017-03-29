var path = require("path")
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool:'eval-source-map',
	entry:{
	app:[__dirname+"/scripts/main.js"]
	},
	output:{
		publicPath:"http://localhost:8080/static/dist",
		path:__dirname+"/build",
		filename:"boundle.js"
	},
	module:{
		loaders:[
		  {
		  	test:/\.json$/,
			loader:"json"
		  },
		  {
		  	test:/\.js$/,
			exclude:/node_modules/,
				loaders:['babel-loader'],
		
	        },
		  {
		  	test:/\.css$/,
		  	loader:'style!css',
            // exclude: /node_modules/,
		  },
		     {
          test: /\.css$/,
          include: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'bower_components'),],
          exclude: path.join(__dirname, 'scripts'),
          loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[local]')
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
	},
	devServer: {
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true,
	progress:true,
        port:8080
    }
}
