const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: ['webpack/hot/poll?100', './src/main.ts'],
  externals: [
    nodeExternals({
      additionalModuleDirs: [path.resolve(__dirname, '../../node_modules')],
      allowlist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /(node_modules|bower_components)/,
        use: 'swc-loader',
      },
    ],
  },
  resolve: { extensions: ['.ts', '.js'] },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new RunScriptWebpackPlugin(),
  ],
  output: { path: path.join(__dirname, 'dist') },
  infrastructureLogging: { level: 'warn' },
  stats: { preset: 'errors-warnings', timings: true },
};
