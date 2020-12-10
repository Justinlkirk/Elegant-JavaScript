let list1 = []

function arrayToList (array){
    list1 = {
        value: array[array.length - 1],
        rest: null
    }
    for (i=array.length - 2; i >= 0; i --){
        list1 = {
            value: array[i],
            rest: list1
        }
    }
    return list1;
}//Creates a list from an array.

arrayToList([10, 16, 18, 20]);
console.log (list1);

console.log (list1.head);