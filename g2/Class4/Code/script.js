function longestString(num1) {
	console.log(arguments) // first argument
	//console.log(arguments[1]) // second argument
	// console.log(arguments[2]) // third argument
	let longest = '';
	for (let i=0; i < arguments.length; i++) {
		//console.log(i+1 + ": " + arguments[i])
		if (arguments[i].length > longest.length) {
			longest = arguments[i];
		}
	}
	return longest;
}

console.log("Result:" + longestString("Hello", "Yo", "Super", "Hello SEDC", "HelLo SEDC", 2, true, null));