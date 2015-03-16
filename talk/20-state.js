/**
 * State
 */

function createLogger() {
	
	var state = {
		count : 0
	}
	
	return function( msg ) {
		state.count++
		console.log( state.count, msg )
	}
}


/*
	
 * State is a mutable target, but can contain immutables

 * React uses setState() to know when state has changed

 * State is never directly publicly exposed

 * State properties are the long lost private variables

*/








