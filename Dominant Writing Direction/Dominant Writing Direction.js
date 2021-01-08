function dominantDirection(text) {
    let leftToRight = 0;
    let rightToLeft = 0;
    let topToBottom = 0;

    for (i=0; i < text.length -1; i++){
        code = text.codePointAt(i);
        scriptIdentity = characterScript(code);
        if (scriptIdentity != null) {
            if (scriptIdentity.direction == "ltr") leftToRight++;
            else if (scriptIdentity.direction == "rtl") rightToLeft++;
            else if (scriptIdentity.direction == "ttb") topToBottom++;
        };
    };
    if (leftToRight > rightToLeft && leftToRight > topToBottom) return "Left to right is the dominant direction in this text."
    else if (rightToLeft > leftToRight && rightToLeft > topToBottom) return "Right to left is the dominant direction in this text."
    else if (topToBottom > leftToRight && topToBottom > rightToLeft) return "Top to bottom is the dominant direction in this text."
    else return "At least two of the directions are tied."
};// Determines the direction each letter is written in and returns the dominant direction from the text provided

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      };
    };
    return null;
};// Function from Elegant Java script that finds what script the text code originates from

  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl