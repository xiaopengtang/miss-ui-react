const path = require("path")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base")

const config = {
    "source" : path.resolve("src/package/mu.js")
    ,"dist" :  path.resolve("dist/")
}

const {DIST} = process.env

const webpack = require("webpack")

const webpackConfig = merge(baseConfig,{
    "entry" : {
        "mu" : config.source
    }
    ,"output" : {
        "library"  : "mu"
        ,"libraryTarget" :  "umd"
        ,"filename": DIST ? "[name].min.js" : "[name].js"
        ,"path":  config.dist
    }
    ,"resolve" : {
        "extensions" : [".js", ".json", ".jsx", ".css",".scss",".ts",".coffee"]
    }
    ,"plugins" : [
    ]
    ,"externals" : [
        {
            "react-dom" : {
                "root" : "ReactDOM"
                ,"commonjs2" : "react-dom"
                ,"commonjs" : "react-dom"
                ,"amd" : "react-dom"
            }
            ,"react" : {
                "root" : "React"
                ,"commonjs2" : "react"
                ,"commonjs" : "react"
                ,"amd" : "react"
            }
            ,"lodash" : {
                "root" : "lodash"
                ,"commonjs2" : "lodash"
                ,"commonjs" : "lodash"
                ,"amd" : "lodash"
            }
        }
    ]
})

DIST && webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}))

module.exports = webpackConfig
