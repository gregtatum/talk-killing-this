function Logger( msg ) {
	this.msg = msg
	this.count = 0
}

Logger.prototype.log = function() {
	this.count++
	console.log( this.count, this.msg )
}

var logger = new Logger("A typical Object Oriented logger")

logger.log()
logger.log()
logger.log()