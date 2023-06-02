const palindromes = function (input) {
    const noPunctuation = input.replace(/[^a-zA-Z0-9]/g, ''); 

    const regInput = noPunctuation.toLowerCase(); 

    function reverseString(str) {
        return str.split("").reverse().join("");
    }; 

    const revInput = reverseString(regInput); 
    
    if (regInput == revInput) {
        return true; 
    } else {
        return false; 
    }

};

// Do not edit below this line
module.exports = palindromes;
