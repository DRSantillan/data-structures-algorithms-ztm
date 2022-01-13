
// Google question
// given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2;

const getFirstRecurringCharacter = arr => {
	let map = {};

    for(let i =0;i<arr.length;i++) {
        if(map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            map[arr[i]] = i;
        }
    }
    return undefined;
};

const firstArr = getFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);
console.log(firstArr, 'first');

const secondArr = getFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
console.log(secondArr, 'second');

const thirdArr = getFirstRecurringCharacter([2, 3, 4, 5,]);
console.log(thirdArr, 'thirdArr');
