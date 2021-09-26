const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [
            '.ts',
            '.mjs',
            '.js',
            '.jsx',
            '.vue',
            '.json',
            '.wasm']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/i,
                loader: 'ts-loader'
            }
        ]
    },
    devServer: {
        port: '8081',
        client: {
            logging: 'error',
            overlay: false,
        },
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '2333',
            template: './index.html'
        })
    ]

}