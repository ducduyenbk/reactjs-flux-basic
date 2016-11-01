const path = require('path');
const webpack = require('webpack');
var node_dir = __dirname + '/node_modules';

var config = {
    entry: {
        home: path.join(__dirname, "scripts/jsx/_bundle_/index.home")
    },
    output: {
        path: path.join(__dirname, "scripts/jsxbuild"),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react'),
            'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
        }
    },
    externals: {
        'react': 'React',
        'react-dom': 'React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('home', null, false)
    ]
};

module.exports = config;