module.exports = {
  'default': ['serve'],
  'dev': [
    'sass:dev',
    'autoprefixer:dev'
  ],
  'serve': [
    'dev',
    'concurrent'
  ]
}
