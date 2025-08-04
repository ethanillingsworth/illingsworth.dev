import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
    entry: {
        "home": "./src/js/home.js"
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
        // historyApiFallback: {
        //     rewrites: [
        //         {
        //             from: /^\/blank\/[^\/]+$/, // matches /blank/anything
        //             to: '/blank/index.html',   // serve blank/index.html
        //         },
                
        //     ],
        // },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/tailwind.css",
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
                }
            ]
        }),
        
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunks: ['home'],
            favicon: './src/imgs/logo.png'
        })
    ]
};