

const gretting = function (value) {
   if (value == 'Mark' && typeof (value) === 'string') {
      return 'Hi, Mark'
   }
   return 'Hello,' + value;
}
console.log(gretting("Max"));
console.log(gretting("Mark"));
console.log(gretting("Oleg"));




function min(a, b) {
   if (a < b) {
      return a;
   }
   return b;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));




const isEven = function (value) {
   if (value % 2 === 0) {
      return 'true'
   }
   return 'false';
}
console.log(isEven(4));
console.log(isEven(5));




function hypotenuse(sideN, sideM) {
   return Math.sqrt(Math.pow(sideN, 2) + Math.pow(sideM, 2));
}
console.log(hypotenuse(4, 3));



function deleteChars() {
   let str = 'Hello';
   str = str.slice(1);
   console.log(str);

   let letter = 'A';
   letter = letter.slice(1);
   console.log(letter);
}
deleteChars()



const checkLetterCase = function (letter) {
   if (letter === letter.toUpperCase()) {
      return 'Оууу май, большая буква!'
   }
   return 'Нет уж, маленькие буквы - скучно';

}
console.log(checkLetterCase("s"));


const someFn = function (str) {
   lowerStr = str.toLowerCase();
   console.log(lowerStr[0].toUpperCase() + lowerStr.substring(1));
}
someFn('пиТеР');




const checkStringLength = function (string, number) {
   if (string.length > number) {
      return 'String is too long';
   }
   return 'Hi'
}
console.log(checkStringLength("Hi", 2))



const concatenate = function (str) {
   return 'Hello ' + str;
}
console.log(concatenate("World"))
