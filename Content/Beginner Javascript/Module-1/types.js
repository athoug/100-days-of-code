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