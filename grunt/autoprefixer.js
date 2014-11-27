module.exports = {
  options: {
    map: true,
    browsers: [
      '> 1%',
      'last 2 versions'
    ]
  },

  dev: {
    src: '<%= statics %>/css/site.css',
    dest: '<%= statics %>/css/site.css'
  }
};
