const reverseString = function(str){

    let strLength = str.length;
    let storageArray = [];
    let upCounter = 0;

    for(let i = strLength-1; i >= 0; i--){

        storageArray[upCounter] = str[i];
        upCounter = upCounter + 1;

    }

return storageArray.join('')

};

// Do not edit below this line
module.exports = reverseString;
