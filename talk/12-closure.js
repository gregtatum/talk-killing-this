function createLogger( msg ) {
	
	var count = 0
	
	return function() {
		
		// IMPORTANT ASIDE:
		// when a variable is referenced in a closure
		// it CAPTURES a reference to it
		
		count++
		console.log( count, msg )
	}
}

var log = createLogger( "Trapping variables in a closure" )

log()
log()
log()

/*

    | --------------------------------------|
    | Returned "log" closure has captured:  |
    |---------------------------------------|
    | count                                 |
    | msg                                   |
    |---------------------------------------|

	These variables exist in memory as long as there is a
	reference to the "log" variable

*/