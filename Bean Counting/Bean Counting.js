function countBs(word){
    let totalLetter = 0;
    for (count = 0; count < word.length; count++) {
        if (word[count] === "B") totalLetter++;
    }
  return totalLetter
}//Count how man Bs are in a word.
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
function countChar(word, letter){
    let totalLetter = 0;
    for (count = 0; count < word.length; count++) {
        if (word[count] === letter) totalLetter++;
    }
    return totalLetter
}//Counts how many of a specified letter are in a word.