module.exports = {
  dist: {
    files: [{ 
      flatten: true,
      cwd: 'src/svg/', 
      src: ['*.svg'], 
      dest: 'img/' }
    ]
  }
}