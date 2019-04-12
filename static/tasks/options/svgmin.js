module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'src/svg/',
      src: ['*.svg'],
      dest: 'build/svg/'
    }]
  },
  options: {
    plugins: [
        { removeViewBox: false },               // don't remove the viewbox atribute from the SVG
        { removeEmptyAttrs: false }             // don't remove Empty Attributes from the SVG
    ]
  }
}