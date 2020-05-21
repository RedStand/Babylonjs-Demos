const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = [{
    entry:'./src/index.js',
    mode : 'development',
    module:{
        rules :[
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test : /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './index.html',            
            publicPath:'/',
            hash: true
        }),
        new CopyWebpackPlugin({
            patterns : [
                {from : 'asset' , to :'../asset'}
            ]
        })
    ],
    output : {
        path:path.resolve(__dirname , 'dist'),
        filename : 'index.js'
    },
    devServer: {
        open: true,
        publicPath:'/'
    }
}];