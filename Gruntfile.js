module.exports = function(grunt){

	//levantar servidor
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	miappConfig = {
		path: 'webapp/',
	    devUrl: 'miapp.vm',
	    stylesheetsDir: 'webapp/css',
	    port: 9000
	  };

	grunt.initConfig({
		webapp: miappConfig,

		connect: {
			server: {
				options: {
					port: '<%= webapp.port %>',
					base: '<%= webapp.path %>'
					//keepalive: true //si utilizo livereload no hace falta que esté keepalive
				}
			}
		},

		stylus: {
            compile: {
                options: {
                    paths: [stylesheetsDir],
                    'include css': true
                },
                files: {
                    '<%= webapp.path %>/css/app.min.css': stylesheetsDir + '/index.styl' 
                }
            }
        },

        watch: {
            stylesheets: {
                files: [stylesheetsDir + '/**/*.styl', stylesheetsDir + '/**/*.css'],
                tasks: ['stylus'],
                options: {
                    interrupt: true
                }
            }
        }


	});

	grunt.registerTask('default', ['connect', 'compile', 'watch']);
};