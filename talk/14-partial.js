var partial = require('lodash.partial')

function logger( state, msg ) {
	state.count++
	console.log( state.count, msg )
}

var log = partial(
	logger,
	{count:0},
	"Calling from a partially applied function"
)

log()
log()
log()