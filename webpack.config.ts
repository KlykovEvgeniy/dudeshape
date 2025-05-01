import webpack, { sources } from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export default (env: webpack.Configuration) => {
    const config: webpack.Configuration = {
        mode: env.mode,
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, "build"),
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack'],
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html")
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "public", "logo.png"),
                        to: path.resolve(__dirname, "build")
                    }
                ]
            }),
            new MiniCssExtractPlugin()
        ],
        devServer: {
            port: 3000,
        },
        devtool: 'source-map',
    }

    return config;
}
