// hashtable implementation add comments to this later
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	// O(1)
	_hash = key => {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	};
	// O(1)
	set = (key, value) => {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	};
	// O(1)
	get = key => {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	};

	//keys
	keys = () => {
		if(!this.data.length) return undefined
		const keysArray = [];

		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}

		return keysArray;
	};
}

const myHashTable = new HashTable(500);
myHashTable.set('grapes', 100000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 387);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
