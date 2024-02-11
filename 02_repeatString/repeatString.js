const repeatString = function(str, number) {
    //repeatString('hey', 3) will display  'heyheyhey'

    if(number < 0)
        return 'ERROR'
    let text = ""
    for(let i=0; i<number; i++)
    {
        text+=str
    }
    return text
};

// Do not edit below this line
module.exports = repeatString;
