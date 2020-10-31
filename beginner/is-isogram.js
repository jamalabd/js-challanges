// an isogram has no repeating letters
// create a function that checks if str is an isogram 
// it contains only letters
// empty string are a asumed isograms 
// should be case insinsiteve


function isIsogram(string){
    // first you would check if string contains numbers 
    // in our case we asume the dont 
    // handle empty string
    if (string.length === 0 ) return true;
    // hadle case sensitivity
    
    
    string = string.toLowerCase();
    // handle reapeating letters
        // check every letter
        // if letter at one positon is same at another return true
        // turn string into array
        string = string.split('');
        console.log(string)
        // store for refrance point
        const storedChar = [];
        // create an iterator for iterating through the array
        
            for(let i = 0; i < string.length; ++i){
                // each letter of string, checked against refrance point
                val = string[i];
                if(storedChar.indexOf(val) !== -1){
                    // if there is not a refrance to the same letter return false
                    return false;
                }
                // else push letter to array, checking each latter if its has a matched refance
                storedChar.push(val);
            }
        // return true
    return true
}

console.log(isIsogram('Dermatoglyphics'));