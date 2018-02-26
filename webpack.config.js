const path = require('path');
const extractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './components/App/app.jsx', ],
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css|\.scss/,
                use: extractText.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'),
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new extractText('styles.css'),
    ],
};
