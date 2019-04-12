module.exports = {
  options: {
    livereload: true,
  },
  scripts: {
    files: ['src/js/*.js', 'src/js/**/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      //spawn: false,
    }
  },
  css: {
    files: ['src/scss/*.scss', 'src/scss/**/*.scss'],
    tasks: ['sass', 'autoprefixer', 'cssmin'],
    options: {
      //spawn: false,
    }
  },
  svgs: {
    files: 'src/svg/*.svg',
    tasks: ['svgmin', 'svgstore', 'svg2png'],
    options: {
      //livereload: true,
    },
  }
}