// If exists launch argument  '-p';
var productionArg = process.argv.indexOf('-p') != -1 ? true : false;
var inProduction = productionArg ? 'production' : 'development';
const configApp = require('./config/index');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin'); // creates json with dependencies
var HtmlWebpackPlugin = require('html-webpack-plugin'); // creates index.html with all dep..s
// generate index.html in dev-mode
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// exclude js/css from finish version of index.html
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

// Main config
var config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: ['webpack-dev-server/client'], // for dev mode
    app: ['babel-polyfill', './app'], // entry point
    common_css: [
      './styles/main.less',
      './styles/reset',
      './styles/helpers/font-awesome.less',
    ], // global styles sets
  },
  output: {
    path: path.resolve(__dirname, './www/assets'), // for bundle files
    // path: path.resolve(__dirname, './www/assets'), // for bundle files
    // filename: '[name].[chunkhash].bundle.js', // file mask
    filename: '[name].bundle.[hash].js', // file mask
    chunkFilename: '[name].[hash].js',
    publicPath: inProduction === 'production' ? '/assets/' : '/assets/', // for dev-mode
  },
  devServer: {
    // stats: 'errors-only', // for information in console
    historyApiFallback: true, //  GET past *url* after press f5 // for dev mode
    // historyApiFallback: {
    //     index: './rd2hash/index.html',
    // },
    // https: true,
    hot: true,
    // host: 'engage.relationdesk.com', // default
    inline: true,
    port: 8001, // default
    contentBase: path.resolve(__dirname, 'www/'), // for dev-mode
    // contentBase: path.resolve(__dirname, 'www/'), // for dev-mode
    // proxy: [{
    //   path: '*',
    //   target: 'https://engage.relationdesk.com',
    // }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', 'less', '.scss'],
  },
  module: {
    rules: [
      // base64 - images in js/css like base64
      {
        test: /\.(png|jpg|gif|JPG)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 65000,
            }, // Convert images < 65k to base64 strings
          },
        ],
      },
      // fonts
      {
        test: /\.(svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=../fonts/[name].[ext]',
      },
      // js/jsx/es6
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2016', 'es2017', 'react', 'stage-0'],
            },
          },
        ],
      },
      //css
      {
        test: /\.css$/,
        // include: path.resolve(__dirname, 'src'),
        //use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
        use: ExtractTextPlugin.extract({
          // exclude: /node_modules/,
          fallback: 'style-loader',
          // use: ['css-loader[contenthash]?sourceMap', 'postcss-loader'],
          use: ['css-loader?sourceMap', 'postcss-loader'],
        }),
      },
      // sass/scss
      {
        test: /\.(scss|sass)$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          // exclude: /node_modules/,
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'postcss-loader', 'sass-loader'],
        }),
      },
      // less
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src'),
        use: ExtractTextPlugin.extract({
          // exclude: /node_modules/,
          fallback: 'style-loader',
          use: ['css-loader?sourceMap', 'postcss-loader', 'less-loader'],
        }),
      },
      // {test: /\.jade$/, use: [{loader: 'jade-loader'}]}
      {test: /\.html$/, use: [{loader: 'html-loader'}]}
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['./www/assets/*.*']), // clean folder before  every bundling
    new CleanWebpackPlugin(['./www/rd2hash/index.html']), // clean file before every bundling
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        // process.env.NODE_ENV in JavaScript
        NODE_ENV: JSON.stringify(inProduction),
        'process.env.NODE_ENV': JSON.stringify(inProduction),
        APP_PORT: JSON.stringify(inProduction == 'development' ? configApp.frontend.apiPort : '')

      },
    }),
    new ExtractTextPlugin({
      // filename: '[name].[chunkhash].bundle.css',
      filename: '[name].bundle.[contenthash].css',
      allChunks: true,
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: __dirname + '/www/assets', // где его хранить

    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'www/template.html'),
      filename: '../index.html',
      minify: false,
      alwaysWriteToDisk: true,
      excludeAssets: [/main.bundle.*.js/, /common_css.bundle.*.js/],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'www/template2.html'),
      filename: '../index2.html',
      minify: false,
      alwaysWriteToDisk: true,
      excludeAssets: [/main.bundle.*.js/, /common_css.bundle.*.js/],
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'www/assets')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map', // 'inline-source-map'//  //

};

if (inProduction === 'production') {

  // delete config.devServer;
  // Reflect.deleteProperty(config, 'devServer');

  var ugly = new webpack.optimize.UglifyJsPlugin({
    comments: false,
    minimize: true,
    beautify: false,
    compress: {
      warnings: false,
      drop_console: false, // disable console
    },
    sourceMap: true,
  });
  // config.devtool = false;
  config.plugins.push(ugly);


}
module.exports = config;
