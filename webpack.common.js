let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/page-index/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page-index/index.html",
            inject: true,
            chunks: ["index"],
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {
                        interpolate: true
                    }
                }
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|wav)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    }
};