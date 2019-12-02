# The Basics

The course start by discussing the basics.

## 1. Tools

First lesson discusses the tools we need. which include

- Browser (Chrome, Firefox, ..etc)
- Node (which comes with npm)
- Terminal
- Code Editor (VS code is recommended)

## 2. Running JS

In this lesson we discuss the different methods to run javascript.
such as

- The console in the browser
- In `html` with a `script` tag
- in an external `.js` file that is referenced in html
- using node `node script.js`

It's recommended to add the script tag at the bottom of the `body` tag
one, for better performance, also to avoid the mistake of referencing a
tag before it's rendered which later results with a `undefined` or a `null`

## 3. Variables and Statements

In any programming language, we use variables to store data that we want to use or change and reference later on
it sorta like shot-term memory, you want to save this pice of info for later use.
Now in order to create a variable, the syntax is as follows:

_keyword_ variable_name [optional] = value; (the optional in this case is giving the variable a value)

lets take an example:
`var name = 'athoug';`

Now the above is one way of declaring a variable in JS, there are two another ways such as"
`let age = 300;`
`const cool = true;`

All these ways are right, but they have some differences based on:

- Scope: `var` is function scoped where as both `let` and `const` are block scoped
- Ability to update: both `var` and `let` allow you to update the values of the variable where as `const` from the name itself means constant as in it doesn't change

Sometimes it might be confusing to when use what, so Wes gave us some pointers

- use `const` by default
- but if you need to change a value of a variable, use `let`

_Naming Conventions_
There are a couple of conventions when it comes to giving your variables names.

- They shouldn't start with a capital unless they are a class
- should start with a letter [a-z] or _ or $
- if a variable is made up of two words, use camel-casing `iLovePizza` or upper camel-casing `ILovePizza` if using a class

## 4. Code Quality and Tooling

There are a couple of tools out there that help make us write better code, and format it elegantly.
These tools include:

- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

Wes also provided a tool to help us set it up, the [documentation](https://github.com/wesbos/eslint-config-wesbos) is pretty helpful.

Other things I used is use a `.gitignore` file to [not commit the `node_module`](https://stackoverflow.com/questions/29820791/git-ignore-node-modules-folder-everywhere).

## 5. Data Types

Javascript has seven data types that can be derived from the acronym

*SNOB'N'US*

which can be broken down to:

- s -> `string`
- n -> `number`
- o -> `object` (this is a special one because everything in JS is an object)
- b -> `boolean`
- n -> `null`
- u -> `undefined`
- s -> `symbol`

### Strings

Strings are used for holding text

there are three different ways to create strings in javascript:

- double quotes -> `" "`. Example: `const name = "Athoug";`
- single quotes -> `' '`. Example: `const middle = 'Shukri';`
- back-ticks or template strings -> `` ` ` ``. `const last = ``` Alsoughayer ```

#### Single and Double Quotes Dilemma

##### 1. String braking

Sometimes single quotes creates problems if you want to use apostrophe because
it thinks that you ended it example

`const sentience 'she's so cool'; // -> error`

to remedy it you can use escape character the backslash `\`

`const sentience = 'she\'s so cool';`

same thing goes with double, say you want to use quotation marks
it breaks the string thinking it ended and causing an error for the rest of the characters

`const note = "she thinks she's "cool""; // -> error`

same way to fix it is to use escape characters

`const note = "she thinks she's \"cool\"";`

but these issues don't arise in back-tick because well who would want to use it in  a string
so there is a great argument made on using back-ticks

##### 2. Multi-line

Now there's another problem with when wanting to create a multi-line string
it will break because well, of the javascript automatic semicolon insertion
this will cause an error:

``` Javascript
  const song = ' ohhhh yeah
  I

  love
  pizza!';
```

the way to remedy this is by ending each linn with a backslash

``` Javascript
const song = ' ohhhh yeah\
I\
\
love\
pizza!';
console.log(song); // output ->  ohhhh yeahIlovepizza!
```

but even with that fix, it still doesn't generate the desired outcome
and that's not really a way to live your life maintaining all these backslashes
and that's where back-ticks come to the rescue not to mention it reserves the format we wanted

``` Javascript
const song2 = ` ohhhh yeah
I

love
      pizza!`;
console.log(song2);
```

##### 3. No need for concatenation

Say we want to have different lines and perhaps writing html
or if we want to interpellate (meaning have a variable inside a string)
usually we do this using concatenation (joining strings)
when using double or single quotes

``` Javascript
const hello = "Hello, my name is " + name + ". Nice to meet you.";
console.log(hello);
```

or you can do it this way

``` Javascript
let hello2 = "Hello, my name is ";
hello2 += name;
hello2 += ". Nice to meet you.";
console.log(hello2);
```

but with back-ticks we don't need any of that :)
it also comes in handy when we want to make html

``` Javascript
const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello} I am ${1 + 100} years old</p>
  </div>
`;
document.write(html);
```

### Numbers

There is only one type of number in javascript which in number
there is a handy keyword that can help us identify the type of variable
the `typeof` lets test it out

``` Javascript
const age = 100;
console.log(typeof age); // output -> number
console.log(typeof name); // output -> string
```

we can create an integer [a whole number eg 100] or a float [which is a number that has a decimal eg 101.1]

``` Javascript
const integer = 42;
const float = 42.5;
```

#### Arithmetic Operations

The operations available for us are:

- addition `+`-> `console.log(integer + float);`
- subtraction `-` -> `console.log(integer - float);`
- multiplication `*` -> `console.log(integer * float);`
- division `/` -> `console.log(integer / float);`
- remainder | modules `%` ->  `console.log(integer % float);`
- and the power `**` -> `console.log(2 ** 3);`

The only thing to keep in mind is when doing these operations on different types
example adding a number with a string the outcome won't be as suspected because
js does automatic type coercion (change type from one to another)

`console.log(1 + '1'); // output -> 11`

#### Helper Functions

Along with numbers, we have helper methods

``` Javascript
console.log(Math.round(34.7));
console.log(Math.floor(34.7));
console.log(Math.ceil(34.7));
console.log(Math.random()); // will give you a random number between 0 and 1
```

sometimes when adding floats in js it doesn't give you an accurate result

`console.log(0.1 + 0.2); // output -> 0.30000000000000004`

this is a trick wes showed to show the reason behind the odd addition

`window.location =```https://${0.1 + 0.2}.com```;`

so when wanting to work with money, don't use decimals!!!
just convert them into cents

``` Javascript
const price = 10.34; // no no
const rightPrice = 1034; // yes yes
```

This way we will always work with whole numbers
later on we will see how to work with currency values

#### Other Number types

Javascript also has `infinity` and `-infinity`
in the end of the day there is a max to what the computer can calculate
so if you try to calculate something too hight, it will return `infinity` or `-infinity`
example:

`console.log(1000 ** 2000); // output -> Infinity`

yet they are numbers

`console.log(typeof (1000 ** 2000)); // output -> number`

also you might encounter NaN which stand for not a number
say you divide a number by a string

`console.log(10 / 'dog'); // output -> not a number`

it too is a type of number
`console.log(typeof NaN); // output -> number`
