# Why `this` is problematic

 * Overloads a central object with mutable state, configuration settings, and functions
 
 * Context is easily lost when working with closures
 
 * Events are confusing ( .bind(this) )
 
 * Doesn't provide much semantic meaning
 
 * Makes all of your data public to consuming code