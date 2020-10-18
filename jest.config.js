const { defaults } = require('jest-config');

module.exports = {
  displayName: 'Food App',
  verbose: true,
  preset: 'jest-expo',
  testMatch: ['**/?(*.)+(spec|test).js'],
  clearMocks: true,
  setupFiles: ['<rootDir>/enzyme.config.js', '<rootDir>/jest-setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ]
};
