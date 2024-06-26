const pathName = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production'
    return {
        entry: "./src/app.js",
        output: {
            path: pathName.join(__dirname, 'public', 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/
            }, {
                test: /\.s?css$/,
                use: [ MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            }]
        },
        plugins: [new MiniCssExtractPlugin({ 
                    filename: 'styles.css'
                })
        ],
        devtool: isProduction ? 'source-map' : "inline-cheap-module-source-map",
        devServer: {
            static: {
                directory: pathName.join(__dirname, 'public')
            },
            historyApiFallback: true,
            devMiddleware: {
                publicPath: '/dist/'
            }
        }
    }
}
