module.exports = {
  mode: 'none',
  entry: {
    cjs: './test.cjs',
    mjs: './test.mjs'
  },
  output: {
    filename: '[name].bundle.js',
  },
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
    },
  },
};
