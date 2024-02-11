const removeFromArray = function(array, ...args) {
    //should return [1,2,4] when given removeFromArray([1,2,3,4],3)

    let newArray = []

    array.forEach(item => {
        
        if(!args.includes(item))
        {
            newArray.push(item);
        } 
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
