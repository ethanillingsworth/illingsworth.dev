import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    entry: {
        "home": "./src/js/home.js",
        "projects": "./src/js/projects.js",
        "blog": "./src/js/blog.js",
        "post": "./src/js/post.js"
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js',
        assetModuleFilename: 'imgs/[hash][ext][query]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 5500,        // you can change this port
        open: true,        // auto-opens the browser
        hot: true,         // enables hot module replacement
        liveReload: true,  // fallback auto-reload if HMR fails
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/post\/[^\/]+$/, // matches /post/anything
                    to: '/post/index.html',   // serve post/index.html
                },
                
            ],
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/scripts\//,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/imgs', // where you put the _redirects file
                    to: 'imgs',                 // output it at the root of /public
                },
                {
                    from: 'src/icons', // where you put the _redirects file
                    to: 'icons',                 // output it at the root of /public
                },
                {
                    from: 'src/data', // where you put the _redirects file
                    to: 'data',                 // output it at the root of /public
                },
                {
                    from: 'src/markdown', // where you put the _redirects file
                    to: 'markdown',                 // output it at the root of /public
                },
                {
                    from: 'src/netlify.toml', // where you put the _redirects file
                    to: 'netlify.toml',                 // output it at the root of /public
                },
                {
                    from: 'src/sitemap.xml', // where you put the _redirects file
                    to: 'sitemap.xml',                 // output it at the root of /public
                }
            ]
        }),
        
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['home'],
            favicon: './src/imgs/logo.png'
        }),
        new HtmlWebpackPlugin({
            template: "./src/projects/index.html",
            filename: "projects/index.html",
            chunks: ['projects'],
            favicon: './src/imgs/logo.png'
        }),
        new HtmlWebpackPlugin({
            template: "./src/blog/index.html",
            filename: "blog/index.html",
            chunks: ['blog'],
            favicon: './src/imgs/logo.png'
        }),
        new HtmlWebpackPlugin({
            template: "./src/post/index.html",
            filename: "post/index.html",
            chunks: ['post'],
            favicon: './src/imgs/logo.png'
        })
    ]
};