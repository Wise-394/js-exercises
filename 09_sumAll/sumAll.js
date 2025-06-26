//implement a function that takes 2 positive integers 
//and returns the sum of every integer between (and including) them:

//make a sum variable
//loop start with the firstNum
//add the current num to the sum variable
//end with secondNum
const sumAll = function(firstNum, secondNum) {
    if(!(Number.isInteger(firstNum) && Number.isInteger(secondNum))){
        return "ERROR"
    }
    if(firstNum < 0 || secondNum < 0){
        return "ERROR"
    }

    let sum = 0
    const start = firstNum < secondNum ? firstNum : secondNum
    const end = firstNum < secondNum ? secondNum : firstNum
    for(let i = start; i <= end; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
