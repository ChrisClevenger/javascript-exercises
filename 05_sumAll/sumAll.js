const sumAll = function(lowEnd, highEnd) {
    if (lowEnd > highEnd) {
        [lowEnd, highEnd] = [highEnd, lowEnd]; 
    }
    else if (lowEnd < 0) {
        return ("ERROR"); 
    }
    else if (highEnd < 0) {
        return ("ERROR"); 
    }

    else if (Number(lowEnd) !== lowEnd || Number(highEnd) !== highEnd) {
        return ("ERROR"); 
    }
    const intArray = []; 
    for (let i=lowEnd; i <= highEnd; i++) {
        intArray.push(i); 
    }
    let sumArray = 0; 
    for (let i=0; i < intArray.length; i++) {
        sumArray += intArray [i]; 
    }
    return (sumArray); 
};

sumAll(10, [90,  1]); 

// Do not edit below this line
module.exports = sumAll;
