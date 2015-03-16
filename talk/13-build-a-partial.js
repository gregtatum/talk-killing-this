var naivePartial = function( func, arg1 ) {
	
	return function( arg2 ) {
		return func( arg1, arg2 )
	}
}

var greeting = function( salutation, person ) {
	console.log( salutation + " " + person )
}

var hello = naivePartial( greeting, "Hello" )

hello("Bill Nye")
hello("Mike Tyson")
hello("Margaret Thatcher")