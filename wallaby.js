module.exports = (wallaby) => {
  return {
    env: {
      type: 'node'
    },
    testFramework: 'mocha',
    files: [
      'src/**/*.js',
      'src/**/*.json'
    ],
    tests: [
      'test/test-server.js'
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    debug: true,
    workers: {
      recycle: true
    }
  }
}
