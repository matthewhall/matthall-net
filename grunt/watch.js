module.exports = {
  scss: {
    files: ['<%= statics %>/scss/**/*.scss'],
    tasks: [
      'sass:dev',
      'autoprefixer:dev'
    ]
  }
};
