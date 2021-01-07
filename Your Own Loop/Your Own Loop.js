function loop (value, testFunction, updateFunction, bodyFunction){
    currentValue = value;

    while (testFunction(currentValue)){
        bodyFunction(currentValue);
        currentValue = updateFunction(currentValue);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1