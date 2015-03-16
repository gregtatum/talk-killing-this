function Talk( greeting ) {
	this.greeting = greeting
	$('#start').click( this.start.bind(this) );
}

Talk.prototype = {
	start: function() {
		console.log( this.greeting )
	}
}

var talk = new Talk( "Let's talk about `this`" )