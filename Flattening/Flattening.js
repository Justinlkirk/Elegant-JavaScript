let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}));//Takes in the array given, parces out each piece, and combines it into a single array