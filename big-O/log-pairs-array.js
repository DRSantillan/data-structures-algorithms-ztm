// log all pairs of array

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// using for loop
const arrayPairLogger = array => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			console.log(array[i], array[j], 'using for loop');
		}
	}
};

// using forEach
const arrayPairLoggerEs6 = array => {
	array.forEach(i => {
		array.forEach(j => {
			console.log(i, j, 'using foreach');
		});
	});
};

arrayPairLogger(arr);
arrayPairLoggerEs6(arr);
// O(n) linear time O(1) constant time
// the big O of these functions is O(n^2) Quadratic time this horrible
// basically when you have a loop within a loop you need to multiple.
// if you have 2 loops not nested it will be O(n) but that depends of on the inputs
// if they are different inputs then the big O would be O(input + differentInput)
