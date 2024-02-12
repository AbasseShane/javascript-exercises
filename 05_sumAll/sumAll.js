const sumAll = function(num1, num2) {
    // exmaple : (1,4) = 1+2+3+4 = 10
    
    let larger, smaller, total = 0

    if(num1 > num2)
    {
        larger = num1
        smaller = num2
    }
    else if(num1<0 || num2<0)
        return "ERROR"
    else if(!Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR"
    else
    {
        smaller = num1
        larger = num2
    } 
    
    for(let i=smaller; i<=larger; i++)
    {
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
