// Create a function that reverses a string:
// 'Hi my name is Dean Santillan
// O(n) time complexity
let str = 'Hi my name is Dean Santillan';

// My initial version
const reverseAString = argString => {
	// check args to see if has required input if not return undefined
	if (!argString || argString.length < 2 || typeof argString !== 'string') {
		return undefined;
	}
	let reversedString = '';
	let startTime = performance.now();
	for (let i = argString.length - 1; i >= 0; i--) {
		reversedString = reversedString + argString[i];
	}
	let endTime = performance.now();

	return reversedString;
};
//
console.log(reverseAString(str), '<= for loop');

// Version 2
const reverseBuiltInMethods = argString => {
	if (!argString || argString.length < 2 || typeof argString !== 'string') {
		return;
	}
	return argString.split('').reverse().join('');
};
//
let startTime = performance.now();
console.log(reverseBuiltInMethods(str), '<= builtin methods ');
let endTime = performance.now();
console.log(endTime - startTime, ' <= Performance Time for built-in methods');

//  Version 3 > ES6
const reverseStringES6 = argStr => argStr.split('').reverse().join('');
startTime = performance.now();
console.log(reverseStringES6(str), '<= using es6');
endTime = performance.now();
console.log(endTime - startTime, ' <= Performance Time for ES6');

// Version 4 > another method using destructuring
const reverseStringDestructure = argStr => [...argStr].reverse().join('');
startTime = performance.now();
console.log(reverseStringDestructure(str), '<= using destructuring');
endTime = performance.now();
console.log(endTime - startTime, ' <= Performance Time for Destructure');

// implement a version using recursion when you learn more about it
