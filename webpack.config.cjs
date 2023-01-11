/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path"); // Webpack uses this to work with directories

// This is the main configuration object.
// Place to write different options and tell Webpack what to do
module.exports = {
    mode: "development", //none, development or production(by default)
    devtool: "eval",
    entry: "./src/scripts/index.js",
    output: {// Path and filename of your result bundle.
        path: path.resolve(__dirname, "dist"),
        publicPath: '/', //hz what it is
        filename: "bundle.js",//Webpack will bundle all JavaScript into this file
    },
    module: {
        rules: [
            {
                test: /\.js$/, //shows extension of files which we are going to transform
                exclude: /(node_modules)/, //tells Webpack which path should be ignored when transforming modules
                use: { //here we set loader
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader // It gets all transf. CSS and extracts it into 1 separate bundled file
                    },
                    // {
                    //     loader: 'style-loader' // Enables to insert <style> tag with css into the <head> of html file
                    // },
                    {
                        loader: 'css-loader' // This loader resolves url() and @imports inside CSS
                    },
                    // {
                    //     loader: 'postcss-loader' // Then we apply postCSS fixes like autoprefixer and minifying
                    // }
                ]
            },
            {
                // Now we apply rule for images
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                       {
                         loader: "file-loader", // Using file-loader for these files
                         options: { // In options we can set format, directory to save, ...
                           outputPath: 'img'
                         }
                       }
                     ]
              }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
        new HtmlWebpackPlugin({
            // template: path.join(__dirname, 'src', 'index.html'),
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
        })
    ],
    devServer: {
        watchFiles: path.join(__dirname, './dist'),
        compress: true,
    },
    optimization: {
        // runtimeChunk: 'single', //we have more than one entrypoint on a single HTML page here
        minimize: false // if do not want to get minimized file
      },
}
