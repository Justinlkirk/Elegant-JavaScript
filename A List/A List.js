function arrayToList (array){
    let list = {
        value: array[array.length - 1],
        rest: null
    }
    for (i=array.length - 2; i >= 0; i --){
        list = {
            value: array[i],
            rest: list
        }
    }
    return list;
}//Creates a list from an array.

function listToArray (nextList){
    let array = [];
  	let current = nextList;
  	
console.log(nextList);
    while (current !== null){
      	array.push (current.value);
      	current = current.rest;
    }
    return array;
}//Creates an array from a list.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
