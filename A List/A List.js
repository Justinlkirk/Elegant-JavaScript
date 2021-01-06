function arrayToList (array, index){
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

function prepend (element, list){
    let newList = {
      value: element,
      rest: list
    }
    return newList;
}//Takes a list and adds a value to the beginning

function nth (list, location){
    let tempList = list;

    for (i=0; i <= location; i++){
      if (i == location) return tempList.value;
      else tempList = tempList.rest;
    }
}//Finds the value at the given location and returns it

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

let currentNumber = 0;
let currentValue = list;
let index = 2;


while (currentNumber <= index) {
    if (currentNumber === index) console.log(currentValue.value);
    else if (currentValue.rest === null) console.log(undefined);
    else currentNumber++;
}
/*