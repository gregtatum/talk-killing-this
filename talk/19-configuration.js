/**
 * Configuration
 */

var extend = require('extend')

function createLogger( properties ) {
	
	var config = extend({
		prefix : "Message: "
	}, properties)
	
	return function( msg ) {
		console.log( config.prefix + msg )
	}
}

/*
	
 * Configuration is never mutated

 * In React these are known as properties

 * Configuration is defined externally

 * Function configuration is a core concept in functional programming

*/