'use strict'

module.exports = function(grunt) {
	grunt.initConfig({
		make: {
			default: {
				options: {
					dir: './dist',
					file: 'lodash.tts.js',
					min: 'lodash.tts.min.js'
				}
			}
		}
	})

	grunt.task.loadTasks('./build')
	grunt.registerTask('default', ['make'])
}
