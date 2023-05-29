const removeFromArray = function(arr, ...values) {
    values.forEach((value) => {
    let index = arr.indexOf(value);
    if (index > -1) 
      arr.splice(index, 1);
    }); 
    return arr;
  }

  removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
