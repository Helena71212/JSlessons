// a,b,c,d,e

const splitStringToPairs = (string)=> {
   const arr = [];
   for(let index = 0; index < string.length; index += 2){
     const nextChar = string[index+1] || '_';
     arr.push(string[index] + nextChar);
   }
   return arr;
 }
 console.log(splitStringToPairs('abcde'));
  
