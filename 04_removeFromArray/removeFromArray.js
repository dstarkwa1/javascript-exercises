const removeFromArray = function(arry, ...removalArgs) {

    lenArry = arry.length
    let returnArry = arry

    for (const args of removalArgs){
        for(let i = 0; i <= lenArry; i++){

            if (arry[i] == args && typeof(arry[i]) == typeof(args)){

               returnArry.splice(i,1)

               lenArry = returnArry.length

            } 

        }


        }
    console.log(returnArry)
    
    return returnArry
    }
;

// Do not edit below this line
module.exports = removeFromArray;
