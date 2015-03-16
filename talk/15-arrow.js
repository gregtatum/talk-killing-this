function logger( state, msg ) {
	state.count++
	console.log( state.count, this.msg )
}


var log = () => logger( {count:0}, "Calling from an arrow function" )

log()
log()
log()