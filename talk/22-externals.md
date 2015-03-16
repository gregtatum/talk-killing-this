# Internals

Internals are a collection of functions and other immutable data that are used internally for your module.

### OO Patterns:

 * `new Constructor()` patterns discourage pure functions

 * Side-effects are hard to spot in OO code

 * There is a reluctance to create free-floating functions in OO code


### Using internals:

 * Internal functions make it easy to understand inputs and outputs

 * Functions are cheap to create, and don't clutter the external interface

 * Much easier to see what function has access to change state