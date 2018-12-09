const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

console.log('Environment:', process.env.NODE_ENV)

const DIST_DIR = 'server/public'

const VENDOR_LIBS = [
  'axios',
  'moment',
  'vue',
  'vue-router',
  'vuex'
]
const mode = process.env.NODE_ENV === 'testing' ? 'development' : process.env.NODE_ENV // testing is not a valid mode for Webpack 4.
module.exports = {
  mode: mode || 'development', // Have to set a mode in Webpack 4+
  entry: {
    auth: './client/auth/src/main.js',
    unauth: './client/unauth/src/main.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, DIST_DIR),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // ESLINT loader rule. Must be before any other .js rule.
      // {
      //   enforce: 'pre', // Run before other loaders
      //   test: /\.(js|vue)$/, // All .js files
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue',
      '@shared': path.resolve(__dirname, 'client/shared/src')
    },
    extensions: ['.js', '.vue']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),

    // Do not include moment's locales to reduce bundle size
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
}

// if (process.env.NODE_ENV === 'development') {
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new BundleAnalyzerPlugin()
//   ])
// }

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
