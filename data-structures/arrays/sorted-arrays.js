// Merge the sorted arrays
let sortedArr1 = [0, 3, 4, 31];
let sortedArr2 = [4, 6, 30];

// Result required > [0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = (array1, array2) => {
	// check input arguments
	// need to check articles on how to handle this more efficiently and correctly
	if (array1 === undefined && array2 === undefined)
		return 'No arguments provided';
	if (array1 !== undefined && array2 === undefined) return array1;
	if (array2 !== undefined && array1 === undefined) return array2;
	if (array1.length === 0) {
		if (array2.length === 0) {
			return 'No arrays found.';
		} else {
			return array2;
		}
	}
	if (array2.length === 0) {
		if (array1.length === 0) {
			return 'No arrays found.';
		} else {
			return array1;
		}
	}

	// set up variables in order to process the data
	const mergedArray = [];
	// grab the first item from each array as a starting point
	let arrItem1 = array1[0];
	let arrItem2 = array2[0];
	// set counter of next array item to check
	let index1 = 1,
		index2 = 1;

	while (arrItem1 || arrItem2) {
		// when we get to the end of an array it comes up as undefined so we handle it by checking
		// to if it is undefined.
		if (arrItem2 === undefined || arrItem1 < arrItem2) {
			// if the item in array 1 is less than the item in array 2 we push it into our
			// new array
			mergedArray.push(arrItem1);
			// we then set next value to evaluate by increasing its index
			arrItem1 = array1[index1];
			index1++;
		} else {
			// if the array is equal and or bigger we then push it here
			mergedArray.push(arrItem2);
			// we then set next value to evaluate by increasing its index
			arrItem2 = array2[index2];
			index2++;
		}
	}
	//
	return mergedArray;
};

console.log(mergeSortedArrays(sortedArr1, sortedArr2));

// Another way using built-in methods
const mergeSortedArrays2 = (array1, array2) => {
	// check input arguments
	// need to check articles on how to handle this more efficiently and correctly
	if (array1 === undefined && array2 === undefined)
		return 'No arguments provided';
	if (array1 !== undefined && array2 === undefined) return array1;
	if (array2 !== undefined && array1 === undefined) return array2;
	if (array1.length === 0) {
		if (array2.length === 0) {
			return 'No arrays found.';
		} else {
			return array2;
		}
	}
	if (array2.length === 0) {
		if (array1.length === 0) {
			return 'No arrays found.';
		} else {
			return array1;
		}
	}

	return array1.concat(array2).sort((a, b) => a - b);
};

//
console.log(mergeSortedArrays2(sortedArr1, sortedArr2));
