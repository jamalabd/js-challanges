// split string into pairs
// if odd and has no pair the missing letter should have an undersore

const splitString =(str)=>{
// str.lenght % 2 checks if the string is even or odd returning truthy of falsy
// str.concat concatinates _ to the end of string 
// match(/../g) gets ever other char 
// if strng.length mod 2 is == 0 add _ to the end else str then we use match to get ever other char

// test for null or empyt string
if (str === null || str == null || str == '') return []
return (str.length % 2 ? str.concat('_') : str).match(/../g);
}

console.log(splitString('asd'))  // should print ab, c_