module.exports = function(grunt) {
  grunt.initconfig({
	  pkg: grunt.file.readJSON('package.json'),
	  dirs: {
		  src: 'src',
		  dest: 'dest',
	  },
coffee: {
	compile: {
		files: {
		'<%= dirs.dest %>/js/<%= pkg.name %>.js': '<%= dirs.src %>/coffee/*.coffee'
		}
	}

},
uglify: {
	options: {
	banner: '/*! some copyright information here */',
	},
	dest: {
		files: {
		'<%= dirs.dest %>/js/<%= pkg.name %>.min.js': '<%= dirs.dest %>/js/<%= pkg.name %>.js'
		}
	}

},
watch: {
	files: ['<%= dirs.src %>/js/*.js'],
	tasks: ['build'],
}
});

grunt.loadNpmTasks('grunt-contrib-coffee');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('build', 'Build CoffeeScript Files',[
'coffee',
'uglify',
]);
};

