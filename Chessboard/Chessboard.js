let size = 15
let length = size
let width = size
while (length > 0) {
    length--
    let width = size
    let row = ''
    if (length % 2 === 0)
        while (width > 0) {
            if (width % 2 === 0) row += " ";
            else row += "#";
            width--
    }//Builds the row with alternating # and spaces starting with a space.
    else if (length % 2 != 0)
        while (width > 0) {
            if (width % 2 === 0) row += "#";
            else row += " ";
            width--
    }//Builds the row with alternating # and spaces starting with a #.
    console.log (row)
}//Builds a Chessboard of any size with # and spaces.