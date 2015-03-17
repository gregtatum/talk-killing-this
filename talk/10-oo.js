function Logger( msg ) {
	this.msg = msg
	this.count = 0
}

Logger.prototype.log = function() {
	this.count++
	console.log( this.count, this.msg )
}

var loggerA = new Logger("A typical Object Oriented logger - Logger A")
var loggerB = new Logger("Logger B")

loggerA.log()
loggerA.log()
loggerB.log()
loggerA.log()