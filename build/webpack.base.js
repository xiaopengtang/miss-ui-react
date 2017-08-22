const path = require("path")
const webpack = require("webpack")
const pkg = require("../package.json")
const moment = require("moment")

const header = [
    `create by ${pkg.author}`
    ,`version:${pkg.version}`
    ,`GIT:${pkg.homepage}`
    ,`email:${pkg.email}`
    ,`last update:${moment().format("YYYY-MM-DD hh:mm:ss")}`
].join("\n")


module.exports = {
    "watch" : true
    ,"devtool" : "#source-map"
    ,"plugins" : [
        new webpack.BannerPlugin(header)
    ]
    ,"module" : {
        "rules" : [
            {
                "test" : /\.js$/
                ,"exclude" : /node_modules/
                ,"use" : {
                    "loader" : "babel-loader"
                    ,"options" : {
                        "presets": ["es2015","stage-1","react"]
                        ,"plugins": ["transform-replace-object-assign"]
                    }
                }
            }
            ,{
                "test" : /\.js$/
                ,"exclude" : /node_modules/
                ,"use" : {
                    "loader" : "eslint-loader"
                    ,"options" : {
                        "formatter" : require('eslint-friendly-formatter')
                    }
                }
            }
            ,{
                "test" : /\.css$/
                ,"exclude" : /node_modules/
                ,"use" : ["style-loader","css-loader?modules"]
            }
            ,{
                "test" : /\.json$/
                ,"exclude" : /node_modules/
                ,"use" : ["json-loader"]
            }
            ,{
                "test" : /\.ts/
                ,"exclude" : /node_modules/
                ,"use" : ["ts-loader"]
            }
            ,{
                "test" : /\.coffee/
                ,"exclude" : /node_modules/
                ,"use" : ["coffee-loader"]
            }
            ,{
                "test" : /\.scss/
                ,"exclude" : /node_modules/
                ,"use" : ["style-loader","css-loader","sass-loader"]
            }
            ,{
                "test" : /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/
                ,"exclude" : /node_modules/
                ,"use" : ["url-loader"]
                // ,"use" : {
                //     "loader" : ["url-loader"]
                //     ,"options" : {
                //         "limit" : 50000
                //         ,"name":"[hash:8].[name].[ext]"
                //         ,"publicPath" : "src/style/fonts/"
                //         ,"outputPath" : "dist/css/"
                //     }
                // }
            }
        ]
    }
}
