const webpack = require('webpack');

module.exports = [{
  entry: ['./app.js'],
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      PROJECT_DOMAIN: JSON.stringify(process.env.PROJECT_DOMAIN)
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        },
      }
    ]
  },
}];