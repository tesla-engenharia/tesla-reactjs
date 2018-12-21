const { injectBabelPlugin } = require('react-app-rewired');

const rootImport = [
  'root-import',
  {
    rootPathPrefix: '~',
    rootPathSuffix: 'src',
  },
];

module.exports = function override(config) {
  this.config = injectBabelPlugin(rootImport, config);

  return config;
};
