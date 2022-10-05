const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [  new HtmlWebpackPlugin({ template: './src/index.html' }),
                new FaviconsWebpackPlugin({logo: './src/iuelogo.svg'}),
            ] ,    
    mode: 'production',
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        }, 
        watchFiles: ['src/*', 'README.md'],
        liveReload: true,
        hot: true,
        compress: false,
        port: 9000,
      },    
    experiments: {
        topLevelAwait: true,
        },     
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },        
    performance: {
      hints: "warning",
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
  }
};