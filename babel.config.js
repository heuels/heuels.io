const path = require('path');
const context = path.resolve(__dirname, 'src');

module.exports = {
  babelrc: false,
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment',
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        autoResolveMultipleImports: true,
        context,
        generateScopedName: '[local]-[hash:base64:5]',
        filetypes: { '.css': { plugins: ['postcss-nested'] } },
        handleMissingStyleName: 'warn',
      },
    ],
  ],
};
