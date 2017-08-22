const path = require("path")
const HtmlwebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const merge = require("webpack-merge")

const baseConfig = require("./webpack.base")

const config = {
	"source" : path.resolve("example/main.js")
	,"dist" : path.resolve("example/dist/")
	,"publicPath" : path.resolve()
}

const webpack = require("webpack")

module.exports = merge(baseConfig,{
	"entry" : {
		"main" : config.source
	}
	,"output" : {
		"library"  : "mu"
	    ,"libraryTarget" :  "umd"
		,"filename": '[name].js'
	    ,"path":  config.dist
	    ,"publicPath" : ""
	    ,"chunkFilename": '[name].chunk.js'
	}
    ,"devServer" : {
        "compress" : true
        ,"port" : "9999"
        ,"hot" : true
        ,"inline" : true
        ,"open" : true
    }
	,"plugins" : [
	    /*new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
	    ,*/
        new webpack.HotModuleReplacementPlugin()
        ,new HtmlwebpackPlugin({
	    	inject: true
            ,filename: path.join(__dirname, '../example/dist/index.html')
            ,template: path.join(__dirname, '../example/main.html')
	    })
	    ,new FriendlyErrorsPlugin()
	]
    ,"resolve" : {
        "extensions" : [".js", ".json", ".jsx", ".css",".scss",".ts",".coffee"]
        ,"alias" : {
            "mu" : "../src/package/mu.js"
            ,"style" : "../src/style/mu.scss"
        }
    }
})
