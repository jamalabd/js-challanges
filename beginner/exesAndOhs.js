function XO(str) {
  let newArr = str.toLowerCase().split('');
  let xCounter = 1, oCounter = 1;
  newArr.forEach((el,i)=>{ 
    if(el == 'x') xCounter++;
    if(el == 'o') oCounter++;
  }); 
  return xCounter == oCounter ?  true :  false;
   
  }

  console.log(XO('xxOo'))