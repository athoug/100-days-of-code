console.log('it works!');

const p = document.querySelector('p');

p.textContent = 'Hey from the JS file';

// TYpes can be remembered with teh acronym SNOB'N'US
// s -> string
// n -> number
// o -> object (this is a special one because everything in JS is an object)
// b -> boolean
// n -> null
// u -> undefined
// s -> symbol

// --------------------------
//          STRINGS
// --------------------------
// strings are used for holding text

// there are three different ways to create strings in javascript:
// double quotes -> " "
/* eslint-disable */
const name = "Athoug";
// single quotes -> ' '
const middle = 'Shukri';
// back ticks or template strings -> ` `
const last = `Alsoughayer`;

// Single and Double Quotes Dilemma

// 1. String braking
// sometimes single quotes creates problems if you want to use apostrophe because
// it thinks that you ended it example
// const sentience 'she's so cool'; -> error
// to remedy it you can use escape character the backslash \
const sentience = 'she\'s so cool';
// same thing goes with double, say you want to use quotation marks
// it breaks the string thinking it ended and causing an error for the rest of the characters
// const note = "she thinks she's "cool""; -> error
// same way to fix it is to use escape characters
const note = "she thinks she's \"cool\"";
// but these issues don't arise in back-tick because well who would want to use it in  a string
// so there is a great argument made on using back-ticks

// 2. Multi-line
// now there's another problem with when wanting to create a multi-line string
// it will break because well, of the javascript automatic semicolon insertion
// this will cause an error:
/*
  const song = ' ohhhh yeah
  I

  love
  pizza!';
*/
// the way to remedy this is by ending each linn with a backslash
const song = ' ohhhh yeah\
I\
\
love\
pizza!';
console.log(song); /// output ->  ohhhh yeahIlovepizza!
// but even with that fix, it still doesn't generate the desired outcome

// and that's not really a way to live your life maintaining all these backslashes
// and that's where back-ticks come to the rescue not to mention it reserves the format we wanted
const song2 = ` ohhhh yeah
I

love
      pizza!`;
console.log(song2);


// 3. No need for concatenation
// say we want to have different lines and perhaps writing html
// or if we want to interpellate (meaning have a variable inside a string)
// usually we do this using concatenation (joining strings)
// when using double or single quotes
const hello = "Hello, my name is " + name + ". Nice to meet you.";
console.log(hello);
// or you can do it this way
let hello2 = "Hello, my name is ";
hello2 += name;
hello2 += ". Nice to meet you.";
console.log(hello2);
// but with back-ticks we don't need any of that :)
// it also comes in handy when we want to make html
const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello} I am ${1 + 100} years old</p>
  </div>
`;
document.write(html);


// --------------------------
//          Number
// --------------------------
// There is only one type of number in javascript which in number
// there is a handy keyword that can help us identify the type of variable
// teh `typeof` lets test it out
const age = 100;
console.log(typeof age); // output -> number
console.log(typeof name); // output -> string

// we can create an integer [a whole number eg 100] or a float [which is a number that has a decimal eg 101.1]
const integer = 42;
const float = 42.5;

// The operations available for us are:
// addition +
console.log(integer + float);
// subtraction -
console.log(integer - float);
// multiplication *
console.log(integer * float);
// division /
console.log(integer / float);
//remainder / modules %
console.log(integer % float);
// and the power
console.log(2 ** 3);

// the only thing to keep in mind is when doing these operations on different types
// example adding a number with a string the outcome won't be as suspected because
// js does automatic type coercion (change type from one to another)
console.log(1 + '1'); // output -> 11

// along with numbers, we have helper methods
console.log(Math.round(34.7));
console.log(Math.floor(34.7));
console.log(Math.ceil(34.7));
console.log(Math.random()); // will give you a random number between 0 and 1

// sometimes when adding floats in js it doesn't give you an accurate result
console.log(0.1 + 0.2); // output -> 0.30000000000000004
// this is a trick wes showed to show the reason behind the odd addition
// window.location =`https://${0.1 + 0.2}.com`;

// so when wanting to work with money, don't use decimals!!!
// just convert them into cents
const price = 10.34; // no no
const rightPrice = 1034; // yes yes
// this way we will always work with whole numbers
// later on we will see how to work with currency values


// Javascript also has infinity and - infinity
// in the end of the day there is a max to what the computer can calculate
// so if you try to calculate something too hight, it will return infinity or - infinity
// example:
console.log(1000 ** 2000); // output -> Infinity
// yet they are numbers
console.log(typeof (1000 ** 2000)); // output -> number

// also you might encounter NaN which stand for not a number
// say you divide a number by a string
console.log(10 / 'dog'); // output -> not a number
// it too is a type of number
console.log(typeof NaN); // output -> number








