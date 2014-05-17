module.exports = function(grunt){

	//levantar servidor
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	miappConfig = {
		path: 'webapp/',
	    devUrl: 'miapp.vm',
	    css: 'webapp/static/css/',
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
                files: {
                    'webapp/static/css/style.css': 'webapp/static/css/style.styl' 
                }
            }
        },

        watch: {
            stylesheets: {
                files: ['webapp/static/css/style.styl', 'webapp/static/css/style.css'],
                tasks: ['stylus'],
                options: {
                    interrupt: false
                }
            }
        }


	});

	grunt.registerTask('default', ['connect','watch']);
};