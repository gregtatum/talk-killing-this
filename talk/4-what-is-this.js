// HEY GREG: show off "10-oo.js" first

/**
 * An illustration of the new Thing() functionality for
 * JavaScript written as a function called newOperator
 */

var extend = require('xtend')

function newOperator( func, prototype, args ) {
	
	var _this = extend( {}, prototype )
	
	func.apply( _this, args )
	
	return _this
	
}
 
function LoggerClass( message ) {
	console.log('Creating new Logger')
	this.message = message
	this.count = 0
}

var loggerPrototype = {
	
	log: function() {
		this.count++
		console.log( this.count, this.message )
	}
	
}

var arguments = ["hello"]


/** 
 * Let's run this thing!
 */

var logger = newOperator( LoggerClass, loggerPrototype, arguments )
// >>> Creating new object
 
logger.log() // >> 1, hello
logger.log() // >> 2, hello
logger.message = "Goodbye"
logger.log() // >> 3, Goodbye