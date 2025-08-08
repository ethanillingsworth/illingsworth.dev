<!--
title: "Get Started With Webpack"
date: "2025-08-07"
tags: ["Webpack","JavaScript","HTML5","CSS3"]
-->

# Get Started With Webpack

If you want to get started with webpack, this is the tutorial for you. Now you will need some basic knowlege of tools like `npm` and node projects, and langauges like `html`, `css` and `javascript`. If you dont have a baseline understanding of any of those, I recommend learning those and then learning webpack. In this article we'll cover what webpack is, how to install it, how to structure your webpack project, basic config, how to add html and css, and setup build and serve scripts.

With all that being said, get your favorite code editor ready and lets get started.

## Table of Contents

- [Get Started With Webpack](#get-started-with-webpack)
  - [Table of Contents](#table-of-contents)
  - [What is Webpack?](#what-is-webpack)
  - [Install Webpack](#install-webpack)
  - [Project Structure](#project-structure)
  - [Basic Config](#basic-config)
    - [Node Require](#node-require)
    - [ES6](#es6)
  - [Add your HTML](#add-your-html)
  - [Add your CSS](#add-your-css)
  - [Scripts](#scripts)
    - [Build](#build)
    - [Serve](#serve)
  - [Conclusion](#conclusion)

## What is Webpack?

Webpack is a module bundler for npm projects. This allows us to input a javascript file that uses node modules and output one sutible for static sites. It also allows us to to bundle all of our javascript files into 1 big one. This is often called a bundle.

## Install Webpack

Installing webpack is simple, just install it like any other npm package, also install the cli tool, were gonna use that later. I recommend installing to your dev dependencies.

```bash
# init project
npm init -y
# install webpack and cli tools
npm install --save-dev webpack webpack-cli
```

## Project Structure

Here is the basic structure of a webpack project

```bash
your-project/
├── src/
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   └── js
│       └── index.js
├── package.json
└── webpack.config.js
```

`package.json` just contains all your project info and scripts like normal.

`webpack.config.js` is all of your webpack configuration and plugins.

`src/` stores all of your project code, `html`, `css`, and `javascript`, you can use node modules in your javascript.

## Basic Config

Webpack can either be setup using the `require()` syntax or `ES6` modules, I will show you both, but will use the `ES6` syntax going forward.

If you plan to follow along and use `ES6` remember to add `"type": "module"` to your `package.json`!!

I have added comments explaining what each part of the code does.

### Node Require

```js
const path = require('path');

module.exports = {
    entry: './src/index.js',        // Entry point
    output: {
      filename: 'bundle.js',        // Output bundle
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',            // or 'production'
};
```

### ES6

```js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js',      // Entry point
    output: {
      filename: 'bundle.js',      // Output bundle
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',          // or 'production'
};
```

I end up using `ES6` more often since I am more familar with the syntax. But either way the result is the same.

You can also input multiple js files commonly reffered to as chunks.

```js
entry: ["./src/index.js", "./src/post.js"]
```

You can also give them labels different than their filename.

```js
entry: {
    home: "./src/index.js",
    post: "./src/post.js"
}
```

If you dont want a singular bundle but intead named files corresponding to your labels you can do this.

```js
output: {
    filename: "[name].js"
}
```

## Add your HTML

HTML packing is really easy, for webpack to see our html and put it in our output directory were gonna use a plugin. A webpack plugin is just a node module that extends webpacks functionality.

For HTML we're gonna use `html-webpack-plugin` (I know very fitting). Install it with the command below.

```bash
npm install -D html-webpack-plugin
```

Import the plugin into your `tailwind.config.js`.

```js
import HtmlWebpackPlugin from "html-webpack-plugin"
```

You can add the plugin to your plugins list

```js
export default {
    entry: {
        "home": "./src/js/home.js",
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",   // html file to use
            filename: "index.html",         // output filename
            chunks: ['home'],               // include home.js chunk
            favicon: './src/imgs/logo.png'  // icon if you want
        }),
    ]
};
```

And just like that webpack will export your HTML into your dist folder.

## Add your CSS

CSS is a little more complicated but more of the same for css we will use `mini-css-extract-plugin` (very fitting again). Along with `css-loader` and `postcss-loader`.

Install

```bash
npm install -D mini-css-extract-plugin css-loader postcss-loader
```

Import

```js
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
```

First add this to your config

```js
export default {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
}
```

This will autodetect your css no matter where you put it.

Now just add it to your plugins

```js
export default {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/bundle.css",
        }),
    ]
}
```

## Scripts

### Build

To build your package with webpack run this.

```bash
webpack
```

You can also add this to your `package.json`.

```json
"scripts": {
    "build": "webpack"
}
```

Then you can just run it like this.

```bash
npm run build
```

### Serve

If you'd like to run a local server and have it up date when you change your source code you can use the `webpack-dev-server` package.

Install it with this command.

```bash
npm install -D webpack-dev-server
```

Then add this to your `webpack.config.js`.

```js
export default {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 5500,        // you can change this port
        open: true,        // auto-opens the browser
        hot: true,         // enables hot module replacement
        liveReload: true,  // fallback auto-reload
    },
}
```

You can run your dev server with:

```bash
webpack serve
```

And add it to your `project.json` to run with `npm run serve`:

```json
"scripts": {
    "build": "webpack",
    "serve": "webpack serve"
},
```

## Conclusion

Well that's all you need to get started with webpack. I hope you found this article  the least bit helpful. Happy coding!
