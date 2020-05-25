const path = require('path');
const context = path.resolve(__dirname, 'src');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/heuels.io.js',
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    },
    extensions: ['.css', '.js', '.json', '.jsx', '.svg', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, './src'),
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                context,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')(),
                require('postcss-nested')({ preserveEmpty: true }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{ from: 'src/assets', to: '.' }]),
    new HtmlWebPackPlugin({
      hash: true,
      inject: true,
      title: '',
      meta: { description: '' },
      favicon: 'src/assets/favicon-light.ico',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: false,
    historyApiFallback: {
      index: 'index.html',
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    writeToDisk: true,
  },
  stats: {
    warnings: false,
  },
};
