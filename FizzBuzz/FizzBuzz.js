let count = 0
while (count < 100) {
    count++
    if (count % 3 === 0 && count % 5 === 0) console.log('FizzBuzz');
    else if (count % 3 === 0) console.log('Fizz');
    else if (count % 5 === 0) console.log('Buzz');
    else console.log (count)
}//Outputs the number 1 to 100 unless the number is divisible by 3, 5, or both 3