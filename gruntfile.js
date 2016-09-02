module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['.tmp'],
      release: {
        options: {
          'no-write': true
        },
        src: ['build']
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'js',
          removeCombined: true,
          mainConfigFile: 'js/main.js',
          preserveLicenseComments : false,
          findNestedDependencies: true,
          generateSourceMaps: true,
          fileExclusionRegExp: /^\./,
          out: 'build/js/main.js',
          name: 'main'
        }
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        unused: true,
        shadow: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      with_overrides: {
        files: {
          src: ['js/Components/**/*.js', 'js/main.js', 'js/init/*.js', 'js/util/*.js', 'js/vendors/*.js']
        }
      }
    },

    useminPrepare: {
      html: ['index.html'],
      options: {
        root: '.',
        dest: 'build'
      }
    },

    usemin: {
      html: ['build/index.html'],
      options: {
        root: '.',
        dest: 'build'
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [
              'js/require.js',
              'index.html',
              'fonts/*',
              'images/*'
            ],
            dest: 'build/'
          }
        ]
      }
    },

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['jshint'],
        options: {
          interrupt: true
        }
      }
    },
    concat: {
      options: {
        separator: ''
      },
      dist: {
        src: ['css/reset.css', 'css/style.css', 'css/icon-fonts.css', 'css/weather-animation.css', 'css/swiper.min.css', 'css/jquery-ui.structure.min.css', 'css/jquery.mCustomScrollbar.css'],
        dest: 'build/css/style.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build',
          src: ['css/style.css'],
          dest: 'build',
          ext: '.min.css'
        }]
      }
    },
    karma: {
      unit: {
        configFile: 'karma.config.js',
        port: 6633,
        singleRun: true,
        browsers: ['Chrome'],
        logLevel: 'ERROR'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-cli');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('watcher', ['watch']);
  grunt.registerTask('default', ['clean', 'jshint', 'karma', 'requirejs', 'useminPrepare', 'copy', 'concat', 'cssmin', 'usemin', 'clean']);
};
