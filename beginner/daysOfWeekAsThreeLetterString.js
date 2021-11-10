function daysOfWeekAsThreeLetterString(s,k){
const daysOfTheWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let result;
   daysOfTheWeek.forEach((e,i)=>{
            if(e.localeCompare(s) == 0 &&  k <= daysOfTheWeek.length){
                if((i + k) >= daysOfTheWeek.length){
                   k = (i + k) - (daysOfTheWeek.length)
                }else{ 
                    k = i + k
                }
                result = daysOfTheWeek[k]
            }else if (e.localeCompare(s) == 0 &&  k > daysOfTheWeek.length){
                k = Math.round((k / daysOfTheWeek.length) )
                console.log(k)
                console.log(i)
                result = daysOfTheWeek[(i + k) - (daysOfTheWeek.length + 1) ]
            }
    })
    return result;
}

console.log(daysOfWeekAsThreeLetterString('Wed', 2));
