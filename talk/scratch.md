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


# Why `this` is great

 * Really easy to persist state when running a function
 * Quick access to a big collection of information and functions
 * Easy to collect a bunch of similar ideas onto an object

# Why `this` is problematic

 * Overloads a central object with mutable state, configuration, and functions
 * Context is easily lost when working with closures
 * Events are confusing
 * Doesn't provide much semantic meaning
 * Makes all of your data public to consuming code
 
# Base units of abstraction in JavaScript

### Values

 * Numbers (0.5, 1, 0xfff, 1e10)
 * Strings ("Hello World", "Lorem Ipsum")
 * Boolean (true, false)
 * null and undefined
 
	var a = "A value"
	var b = a
	b += " is modified"
	assert( a !== b )

### References

 * Arrays
 
	var nums = [0,1,2]
	nums[3] = 3
	var abc = ["a", "b", "c"]
	

 * Objects
 
	var apple = {
		color: "red",
		count: 5,
		type: "Gala"
	}
	console.log( apple.color )
	

 * Functions
 
	function helloWorld() {
		console.log('hello world!')
	}


# Higher levels of abstraction

 * Class
 * Module
 * Framework

# Ways to think about a function's variables

 * Configuration (External, immutable)
 * State (Internal, mutable)