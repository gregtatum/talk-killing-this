var $ = require('jquery')


function Logger( msg ) {
	
	this.msg = msg
	this.count = 0
	this.$img = $("<img src='http://www.colinfbarnes.com/wp-content/uploads/2013/12/star-trek-captains-log.jpg'/>")
	
	$('body').append( this.$img )
	
	this.$img.on('load', function() {
		
		// error!
		this.log()
		
	}.bind(this))
	
}
 
Logger.prototype.log = function() {
	
	this.count++
	console.log( this.count, this.msg )
	
}
 
var logger = new Logger("Captain's log, supplemental.")