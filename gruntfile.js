
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'lib/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('build', ['babel']);
}