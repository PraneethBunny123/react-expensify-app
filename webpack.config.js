const pathName = require("path")

module.exports = {
    entry: "./src/app.js",
    output: {
        path: pathName.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_module/
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        static: {
            directory: pathName.join(__dirname, 'public')
        },
        historyApiFallback: true
    },
}