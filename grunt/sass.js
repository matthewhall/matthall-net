module.exports = {
  options: {
    style: 'expanded'
  },

  dev: {
    files: {
      '<%= statics %>/css/site.css': '<%= statics %>/scss/site.scss'
    }
  }
};
