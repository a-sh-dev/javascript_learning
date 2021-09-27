/* Implement a function that takes a string of hexadecimal numbers separated by spaces and returns the ASCII string it represents.  First convert each hexadecimal number to decimal (base 10), then find which ASCII letter it maps to.

e.g 
hexStringToAscii("68 65 6c 6c 6f 20 77 6f 72 6c 64") => "hello world"

hexStringToAscii("46 6f 6f 21 20 42 61 72 21") => "Foo! Bar!"

Hint: There is a String class method to convert decimal to to ASCII. 

Implement the algorithm to convert from hex to decimal yourself (don't use a library to do that part).
*/

function hexToDecimal(hex) {
	// return parseInt(hex, 16)
	const charMap = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
	const reversedChars = hex.split('').reverse()
	const values = reversedChars.map((char, index) => {
		// 0-9 or a-f
		const charValue = isNaN(char) ? charMap[char] : parseInt(char)
		return charValue * (16 ** index);
	}) 
	return values.reduce((initial, next) => initial + next);
}

function hexStringToAscii(hexString) {
	const decimals = hexString.split(' ').map(hexToDecimal);
	return decimals.map(decimal => String.fromCharCode(decimal)).join('')
}