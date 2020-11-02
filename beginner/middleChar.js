// return the middle char of a word, witch is a string
// if the word length is odd return middle char 
// if word lenght is even return middle two chars

const middleChar = (str)=>{
// make each char avaiible for minupulation
// get middle chars
    // check even and odd get positon of middle char
        // how would you get middle chars if even
            // get index of chars and make value availible
        // how would you get middle char if odd 
            // get index of char and make value availible
// store middle chars
// return middle chars


// make each char avaiible for minupulation
str = str.slice('');
// store middle chars
const saved = [];

// get middle chars
    const length = str.length
   if (length % 2 == 0){
    // check even and odd get positon of middle char
        let first = (length / 2 ) - 1;
     
        saved.push(str.substr(first, 2));
   }else{
        let first = (length / 2) ;
        saved.push(str.substr(first, 1));
   }

// return middle chars
return saved.join('');
}

// this should return ri
console.log(middleChar('test'));