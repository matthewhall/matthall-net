module.exports = {
  dev: {
    tasks: [
      'exec:jekyllServe',
      'watch'
    ],
    options: {
      logConcurrentOutput: true
    }
  }
};
