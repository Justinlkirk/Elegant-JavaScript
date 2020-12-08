function isEven (number) {
    if (number === 0) return 'True';
    else if (number === 1) return 'False';
  	else if (number < 0) return isEven(number * -1);//Ensure that the number is positive to prevent an infinite recurssion problem cause by the next line.
    else return isEven(number -= 2);//Reduces the number by 2 in line with rule 3.
}//Determines if a number is even or odd based off the rules zero is even, one is odd, for any other number N, its evenness is the same as N-2.
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-50));
// → true