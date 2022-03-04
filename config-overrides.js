/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@app': path.resolve(__dirname, 'src/'),
      '@app/components': path.resolve(__dirname, 'src/components'),
      '@app/core': path.resolve(__dirname, 'src/core'),
      '@app/assets': path.resolve(__dirname, 'src/assets'),
    },
  };
  return config;
};
