module.exports = {
  dist: {
    options: {
      // cssmin will minify later
      style: 'expanded',
      sourcemap: 'none'
    },
    files: {
      'build/css/main.css': 'src/scss/main.scss' // 'destination': 'source'
    }
  }
}