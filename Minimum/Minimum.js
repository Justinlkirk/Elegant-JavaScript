function min (a, b) {
    if (a>b) return b;
    else if (b>a) return a;
    else if (b === a) return `${a} is equal to ${b}`;
    else return 'Something is wrong';
}//Function to find the minimum of two numbers.
console.log (min (1,2));
// → 1
console.log (min (1,1));
// → These numbers are equal
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10