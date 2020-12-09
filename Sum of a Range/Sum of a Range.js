function range (start, end, step){
    let domain = [];
    let current = start;
    if (step === undefined && start > end) step = -1;
    else if (step === undefined && start < end) step = 1;

    if (start < end) {
        while (current <= end) {
            domain.push (current);
            current += step;
        }
        return domain;
    }
    else if (start > end){
        while (current >= end) {
            domain.push (current);
            current += step;
        }
        return domain;
    }
}//Generate every whole number, increment determined by step, between the start and the end values.

function sum (numbers) {
  let total = 0;
    for (i = 0; i < numbers.length; i++){
        total += numbers[i]
    }
    return total;
}//Adds all the values in range.

console.log(range(1, 9));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(range(7, 2, -1));
// → [7, 6, 5, 4, 3, 2]
console.log(sum(range(1, 5, 2)));
// → 9