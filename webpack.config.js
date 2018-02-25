const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './components/app.js', ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader', 'cssnext-loader'],
            },
        ],
    },
};
