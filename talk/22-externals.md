# Externals

`new Something()` returns an object

# Do this yourself

	function createLogger() {
		
		return {
			message   : function( msg ) {},
			deleteLog : function() {}
		}
	}

Be purposeful on what gets exposed. Look at it like designing an interface.