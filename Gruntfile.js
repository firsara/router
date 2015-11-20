/*
 * router
 *
 * Copyright (c) 2015 Fabian Irsara
 * Licensed under the MIT license.
 */

module.exports = function(grunt){

  var jsFiles = [
    'src/**/**.js'
  ];

  grunt.initConfig({
    jshint: {
      all: jsFiles,
      options: {
        jshintrc: '.jshintrc'
      }
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      src: jsFiles
    },

    jsonlint: {
      config: {
        src: ['package.json']
      }
    },

    watch: {
      jshint: {
        files: jsFiles,
        tasks: ['jshint', 'jscs']
      },
      jsonlint: {
        files: ['package.json'],
        tasks: ['jsonlint']
      },
      jshint: {
        files: jsFiles,
        tasks: ['docs']
      }
    },

    connect: {
      options: {
        hostname: 'localhost',
        port: 3000
      },
      server: {
        options: {
          base: './',
          open: true
        }
      }
    },

    clean: {
      docs: {
        src: ['docs']
      }
    },

    jsdoc: {
      app: {
        src: ['README.md', 'src/**/**.js'],
        options: {
          destination: 'docs',
          configure: '.jsdocrc',
          private: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('lint', ['jshint', 'jscs', 'jsonlint']);
  grunt.registerTask('docs', ['clean:docs', 'jsdoc']);
  grunt.registerTask('default', ['connect', 'watch']);

};
