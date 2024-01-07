const sumAll = function(int1, int2) {

    let startNum;
    let endNum; 
    let sumReturn = 0;

    console.log(typeof(int2))

    if (typeof(int1) != 'number' || typeof(int2) != 'number' || int1 < 0 || int2 < 0){
        
        return 'ERROR'

    } else {


        if (int2 < int1) {

            startNum = int2
            endNum = int1

        } else {

            startNum = int1
            endNum = int2
        }

        for (let i = startNum; i <= endNum; i++){

            sumReturn = sumReturn + i;

        }

        return sumReturn
    }

};

// Do not edit below this line
module.exports = sumAll;
