function deepEqual (item1, item2){
    let item1Array = Object.entries(item1);
  	let item2Array = Object.entries(item2);
  	let item1Sorted = Object.entries(item1).sort();
  	let item2Sorted = Object.entries(item2).sort();
 
  	if (item1Array.length !== item2Array.length) return "The arrays aren't even the same length!"
	else if (item1Array.toString() === item2Array.toString()) return "The objects are exactly equal.";
  	else if (item1Sorted.toString() === item2Sorted.toString()) return "The objects are the same, but out of order.";
  	else return "The objects are different.";
}//Compares objects on a deeper level to determine if they are the same

let obj = {here: 1, object: 2};
console.log(deepEqual(obj, obj));
// → The objects are exactly equal
console.log(deepEqual(obj, {here: 3, object: 2}));
// → The objects are different
console.log(deepEqual(obj, {here: 1, object: 2}));
// → The objects are exactly equal
console.log(deepEqual(obj, {object: 2, here: 1}));
// → The objects are equal, but out of order