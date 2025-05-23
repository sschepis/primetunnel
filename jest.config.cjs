module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js', // index.js is just for exports, no logic to test
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};