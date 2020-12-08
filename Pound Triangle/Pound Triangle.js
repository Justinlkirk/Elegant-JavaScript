let count = 0
let totalRows = 7
let pound = '#'
while (count < totalRows) {
    count ++
    totalPound = ''
    let subcount = count
    while (subcount > 0) {
        subcount--
        totalPound += pound
    }//Determines the number of pound signs to be placed in the row.
    console.log (totalPound)
}//Outputs a right triangle of pound signs.