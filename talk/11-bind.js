function logger() {
	this.count++
	console.log( this.count, this.msg )
}

var log = logger.bind({
	count: 0,
	msg: "Logging from a bound function"
})

log()
log()
log()