const path=require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /*entry: path.resolve(__dirname,'src/js/script.js'),*/
    entry: path.resolve(__dirname,'src/index.js'),
    devServer: {
      contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
          },
          {
            test: /\.(scss|css)$/i,
            use: ["style-loader", {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  esModule: false,
                }
              },"css-loader","sass-loader"
            ],
          },
          {
            test: /\.(eot|woff|ttf|svg|png|jpe?g|gif)$/,  
            use: ["file-loader"],              
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( 
        {
            template: "./src/index.html"
        })
    ]
}