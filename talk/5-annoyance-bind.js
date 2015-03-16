var $ = require('jquery')


/*------------------------------------------
 * Ok let's add some buttons
 */
	
var $bound = $("<button>Bound</button> <br/>")
var $unbound = $("<button>Unbound</button> <br/>")

$('body').append( $bound, $unbound )



/*------------------------------------------
 * Now let's make a simple Logger class
 */

function Logger( msg ) {
	
	this.msg = msg
	this.count = 0
	
	$unbound.click( this.log )
	$bound.click( this.log.bind( this ) )
	
}
 
Logger.prototype.log = function() {
	
	this.count++
	console.log( this.count, this.msg )
	
}
 
var logger = new Logger("Yo, you clicked a button!")


