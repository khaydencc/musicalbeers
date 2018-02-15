import webpack from 'webpack'
import path from 'path'

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"/*,
    disable: process.env.NODE_ENV === "development"*/
});

export default {
    devtool: 'inline-source-map',

    entry: [
        path.resolve(__dirname, 'src/index.jsx')
    ],

    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.sass'],
        modules: [
            path.resolve('./build'),
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                "build/sass",
                                path.resolve(__dirname, 'node_modules/normalize-scss/sass')
                            ],
                            outputStyle: "nested",
                            sourceComments: true
                        }
                    }
                ]
            }
        ]
        /*loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                includePaths: [
                                    "build/sass"
                                ],
                                file: "styles.scss",
                                outFile: path.resolve(__dirname, 'styles.css', 'src'),
                                outputStyle: "nested",
                                sourceComments: true
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            }
        ]*/
    },
    plugins: [
        extractSass
    ]
}
