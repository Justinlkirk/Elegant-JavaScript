class Group {
    constructor () {
        this.numbers = [];
    }
    add (addedNumber) {
        this.numbers.push(addedNumber);
    }
  	delete (deleteNumber){
      	let result = this.numbers.filter(s => s != deleteNumber)
        this.numbers = result
    }
  	has (searchNumber) {
      	let result = this.numbers.filter(s => s == searchNumber)
        if (result.length != 0) return true;
      	else return false;
    }
  	static from (array) {
      	let tempGroup = new Group();
      	for (let element of array) {
        	tempGroup.numbers.push(element);
        }
      	return tempGroup;
    }
}

let group1 = Group.from ([10, 20]);
console.log(group1);
console.log(group1.has(10));
// → true
console.log(group1.has(30));
// → false
group1.add(10);
console.log(group1.has(10));
// → true
group1.delete(10);
console.log(group1.has(10));
// → false