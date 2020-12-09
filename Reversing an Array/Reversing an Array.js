function reverseArray (originalArray){
    let newArray = [];

    for (i=0; i < originalArray.length; i++){
        newArray.unshift (originalArray[i]);
    }
    return newArray;
}//Reverses an array fed to it.

function reverseArrayInPlace (originalArray){
    const originalArrayLength = originalArray.length;

    for (i=0; i < originalArrayLength; i++) {
        originalArray.push (originalArray[originalArrayLength - i])
      	originalArray.pop();
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
